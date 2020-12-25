var student = [];
function submit(){
    var display = [];
    for (var index = 1; index <= 4; index++) {
    var n1 = document.getElementById("name_student"+index).value;
    student.push(n1); 
    console.log(n1); }
    console.log(student);
    var length_name_of_student_array = student.length;


for (var index = 0; index < length_name_of_student_array; index++) {
    display.push ("<h4> NAME - "+ student[index] + "</h4>");
    console.log(display); }


     document.getElementById("displaynamewithcomma").innerHTML = display;
      var remove_commas = display.join(" ");
      console.log(remove_commas);
       document.getElementById("displaynamewithoutcomma").innerHTML = remove_commas;
        document.getElementById("submit").style.display = "none";
         document.getElementById("sort").style.display = "inline-block";
    

   
}



function del(){
    student.pop();
    student.pop();
    student.pop();
    student.pop(); }

    function sort(){
        student.sort();
    }