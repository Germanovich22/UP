import org.apache.commons.io.IOUtils;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Like extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        JSONObject json = new JSONObject(IOUtils.toString(request.getReader()));
        out.print(String.format("{'Method': 'LIKE POST', 'ID': '%s'}", json.getString("id")));
    }
}
