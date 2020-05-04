import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Batcher extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        JSONObject json = new JSONObject(IOUtils.toString(request.getReader()));
        out.print(String.format("{'Method': 'PAGE LOAD', 'SKIP': '%s', 'TOP': '%s'}",
                json.getString("skip"),
                json.getString("top")));
    }
}
