function footer(){
    return (
        <footer style={{ backgroundColor: "#eef2f5", padding: "20px 40px", position: 'fixed', bottom: 0, width: '100%', left: 0}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto"}}>
                <div>
                    <p style={{margin: "0", fontSize: "18px", fontWeight: "bold"}}>Quizzer 2026</p>
                </div>
                <div style={{display: "flex", gap: "30px"}}>
                    <a  style={{ cursor: "pointer"}}>Contact us</a>
                    <a  style={{ cursor: "pointer"}}>Privacy Policy</a>
                    <a  style={{ cursor: "pointer"}}>Documentation and help</a>
                    <a  style={{ cursor: "pointer"}}>quizzer@dummy@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}
export default footer