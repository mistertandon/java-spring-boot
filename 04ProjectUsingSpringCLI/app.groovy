@RestController
public class ApplicationController {

	@GetMapping(value = "/hello")
	public String hello() {
		"Hello World :-)";
	}
}
