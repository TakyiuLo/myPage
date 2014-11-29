$(document).ready(function() {
    $("#myTabs").tabs();

    /* A default validate handles better, using below code will cause unable to generate
	$('form1').validate({
        rules: {
            pOne: {
                required: true,
                digits: true
            },
            pTwo: {
                required: true,
                digits: true
            },
            pThree: {
                required: true,
                digits: true
            },
            pFour: {
                required: true,
                digits: true
            }
		}
    });
	*/

    function crTable() {
        // using remove to refresh
        var rTable = document.getElementById("myTable");
        if (rTable !== null) rTable.remove();
        // getting the four values
        // putting a "+" to make treat it as a number instead of string
        var pOne = +document.getElementById("pOne").value;
        var pTwo = +document.getElementById("pTwo").value;
        var pThree = +document.getElementById("pThree").value;
        var pFour = +document.getElementById("pFour").value;
        // get the reference for the preview
        var preview = document.getElementById("preview");
        // check if numbers are validate
        if (pOne > pTwo) {
            document.getElementById("pOne").setAttribute("style",
                "outline-color: red");
            document.getElementById("pOne").setAttribute("style",
                "border-color: red");
            return;
        } else {
			document.getElementById("pOne").setAttribute("style",
                "outline-color: green");
            document.getElementById("pOne").setAttribute("style",
                "border-color: green");	
		}
        if (pThree > pFour) {
            document.getElementById("pThree").setAttribute("style",
                "outline-color: red");
            document.getElementById("pThree").setAttribute("style",
                "border-color: red");
            return;
        } else {
			document.getElementById("pThree").setAttribute("style",
                "outline-color: green");
            document.getElementById("pThree").setAttribute("style",
                "border-color: green");	
		}
        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        // creating all cells
        for (var i = pOne, ii = pTwo + 1; i <= ii; ++i) {
            // creates a table row
            var row = document.createElement("tr");
            for (var j = pThree, jj = pFour + 1; j <= jj; ++j) {
                // creates a cell
                var cell = document.createElement("td");
                var cellText;
                // give some style to the cell/table
                var cellStyle = "padding: 10px; ";
                if (i == pOne && j == pThree) {
                    cellText = document.createTextNode("");
                    cell.setAttribute("style", cellStyle +
                        "background-color: #777");
                } else if (i == pOne) {
                    cellText = document.createTextNode(j - 1);
                    cell.setAttribute("style", cellStyle +
                        "background-color: #ccc");
                } else if (j == pThree) {
                    cellText = document.createTextNode(i - 1);
                    cell.setAttribute("style", cellStyle +
                        "background-color: #ccc");
                } else {
                    cellText = document.createTextNode((i - 1) * (j -
                        1));
                    cell.setAttribute("style", cellStyle +
                        "background-color: #ddd");
                }
                // add the text to cell
                cell.appendChild(cellText);
                // add the cell to row
                row.appendChild(cell);
            }
            // add the row to the end of the table body
            tblBody.appendChild(row);
        }
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into preview
        preview.appendChild(tbl);
        // setting an id for tbl
        tbl.setAttribute("id", "myTable");
    }
    $('#create').click(function() {
		crTable();
        $('#tabs').tabs("refresh");
    });
});