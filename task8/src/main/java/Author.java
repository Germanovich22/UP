import org.apache.commons.validator.UrlValidator;

public final class Author {
    private long id;
    private String name;
    private String photoLink;

    private static void verify(Author author) {
        UrlValidator validator = new UrlValidator(new String[]{"http", "https"});

        author.id = author.id < 0 ? 0 : author.id;
        author.name = author.name.length() == 0 ? "" : author.name;
        author.photoLink = validator.isValid(author.photoLink) ? author.photoLink : "";
    }

    /* CONSTRUCTORS */

    Author(long id, String name, String photoLink) {
        this.id = id;
        this.name = name;
        this.photoLink = photoLink;
        verify(this);
    }

    Author(Author author) {
        this.id = author.id;
        this.name = author.name;
        this.photoLink = author.photoLink;
        verify(this);
    }

    Author() {
        this(0, "", "");
    }

    /* GETTERS */

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    /* SETTERS */

    public void setId(long id) {
        this.id = id;
        verify(this);
    }

    public void setName(String name) {
        this.name = name;
        verify(this);
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
        verify(this);
    }
}
