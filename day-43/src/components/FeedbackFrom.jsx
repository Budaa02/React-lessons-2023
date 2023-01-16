import { useState } from "react";


export default function FeedbackFrom() {

    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    function setMessage(text) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setIsSending(true);
        await setMessage(text);
        setIsSending(false);
        setIsSent(true);
    }
    return (
        isSent ?  <h1>Thanks for feedback</h1> 
        :
        <div className="App">
          <form onSubmit={handleSubmit}>
            <p>Ta textee oruulna uu</p>
            <textarea value={text} 
            disabled={isSending}
            onChange={e => setText(e.target.value)}
            >
    
            </textarea>
            <br></br>
            <button>
              Send
            </button>
            {isSending && <p>Sending ....</p>}
          </form>
        </div>
      );

    
}
