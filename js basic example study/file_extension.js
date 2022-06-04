<form>
    <input type="file" id="file1">
        <input type="button" value="check extension" onclick="checkFile();">
</form>

        <p>The file extension is: <span class="output"></span></p>

        <script>
            function checkFile() {
                fileName = document.querySelector('#file1').value;
            extension = fileName.split('.').pop();
            document.querySelector('.output')
            .textContent = extension;
}

            checkFile();


        </script>