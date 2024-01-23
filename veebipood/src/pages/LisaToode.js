
function LisaToode() {
  return (
    <div>
        <div>LisaToode</div>
        <h1>The input element</h1>
        <form action="/action_page.php">
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" /><br /><br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    <p>Click the "Submit" button and the form-data will be sent to a page on the 
server called "action_page.php".</p>
    </div>
  )
}

export default LisaToode