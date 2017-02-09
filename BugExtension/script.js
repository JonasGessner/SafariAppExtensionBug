
if (window === window.top) {
    document.addEventListener("DOMContentLoaded", function(event) {
                              safari.self.addEventListener("message", function(message) {
                                                           if (message.name == "showalert") {
                                                           alert("Message Received");
                                                           }
                                                           }, false);
                              });
}
