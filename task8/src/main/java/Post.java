import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;


public final class Post {

    private long id;
    private String text;
    private LocalDateTime date;
    private Author author;
    private List<String> hashtags = new ArrayList<>();
    private List<Author> likes = new ArrayList<>();

    private static void verify(Post post) {
        post.id = post.id < 0 ? 0 : post.id;
        post.text = post.text.length() > 200 ? post.text.substring(0, 200) : post.text;
    }

    /* CONSTRUCTORS */

    Post(long id, String text, LocalDateTime date, Author author, List<String> hashtags, List<Author> likes) {
        this.id = id;
        this.text = text;
        this.date = date;
        this.author = author;
        this.hashtags.addAll(hashtags);
        this.likes.addAll(likes);
        verify(this);
    }

    Post(Post post) {
        this.id = post.id;
        this.text = post.text;
        this.date = post.date;
        this.author = new Author(post.author);
        this.hashtags.addAll(post.hashtags);
        post.likes.forEach((liker) ->this.likes.add(new Author(liker)));
        verify(this);
    }

    Post() {
        this(0, "", LocalDateTime.of(1970, Month.JANUARY, 01, 00, 00),
                new Author(), new ArrayList<>(), new ArrayList<>());
    }

    /* GETTERS */

    public long getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public Author getAuthor() {
        return new Author(author);
    }

    public List<String> getHashtags() {
        return new ArrayList<>(this.hashtags);
    }

    public List<Author> getLikes() {
        return new ArrayList<>(this.likes);
    }

    /* SETTERS */

    public void setId(long id) {
        this.id = id;
        verify(this);
    }

    public void setText(String text) {
        this.text = text;
        verify(this);
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
        verify(this);
    }

    public void setAuthor(Author author) {
        this.author = author;
        verify(this);
    }

    public void setHashtags(List<String> hashtags) {
        this.hashtags = hashtags;
        verify(this);
    }

    public void setLikes(List<Author> likes) {
        this.likes = likes;
        verify(this);
    }
}
