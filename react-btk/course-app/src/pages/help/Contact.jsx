export default function Contact() {
    return (
    <>
        <div id="contact">
            <h2>Contact</h2>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    </>
    );
}
