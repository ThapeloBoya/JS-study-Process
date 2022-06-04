//check the total marks 

function examMarks(total, final) {

    if (total <= 100 && total >= 89) {
        document.write("A+ grade: ");
    }
    else {
        document.write("Not A+ grade: ");
    }

    if (final >= 90) {
        document.write(true);
    }
    else {
        document.write(false);
    }
}
//place param values here
total = 90;
final = 95;

examMarks(total, final)