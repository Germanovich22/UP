import org.apache.commons.io.IOUtils;
import org.json.JSONObject;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Poster extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        out.print(String.format("{ 'method': 'GET TWEET', 'ID': '%s'}", request.getParameter("ID")));
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        out.print(String.format("{ 'Method': 'DELETE TWEET', 'ID': '%s'}", request.getParameter("ID")));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        JSONObject json = new JSONObject(IOUtils.toString(request.getReader()));
        out.print(String.format("{'Method': 'POST TWEET', 'TEXT': '%s'}",
                json.getJSONObject("post").getString("text")));
    }
}
