import com.fasterxml.jackson.annotation.JsonProperty;
import org.junit.jupiter.api.Test;

public class AuthPayLoad {

    @JsonProperty
    private String email;
    @JsonProperty
    private String password;
    public AuthPayLoad(String email, String password) {
        this.email=email;
        this.password=password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
