var room = 1;

function education_fields() {
  room++;
  var objTo = document.getElementById("education_fields");
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "mb-2 removeclass" + room);
  var rdiv = "removeclass" + room;
  divtest.innerHTML =
    '<form class="row"><div class="col-md-5 col-sm-12 col-12"><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="Schoolname" placeholder="Enter Website URL"></div></div><div class="col-md-5 col-sm-12 col-12"> <div class="form-group"> <input type="text" class="form-control" id="Age" name="Age" placeholder="Page Title"> </div></div><div class="col-sm-2"> <div class="form-group"> <button class="btn rounded-pill  btn-outline-dark font-weight-medium waves-effect waves-light" type="button" onclick="remove_education_fields(' +
    room +
    ');"> <i class="ri-delete-bin-line fs-5"></i> </button> </div></div></form>';

  objTo.appendChild(divtest);
  feather.replace();
}

function remove_education_fields(rid) {
  $(".removeclass" + rid).remove();
}

function education_fields1() {
  room++;
  var objTo = document.getElementById("education_fields1");
  var divtest = document.createElement("div");
  divtest.setAttribute("class", "removeclass" + room);
  var rdiv = "removeclass" + room;
  divtest.innerHTML =
    '<form class="row"><div class="col-md-5 col-sm-12 col-12"><div class="form-group"><input type="text" class="form-control" id="Schoolname" name="Schoolname" placeholder="Enter Website URL"></div></div><div class="col-md-5 col-sm-12 col-12"> <div class="form-group"> <input type="text" class="form-control" id="Age" name="Age" placeholder="Page Title"> </div></div><div class="col-sm-2"> <div class="form-group"> <button class="btn rounded-pill btn-outline-dark font-weight-medium waves-effect waves-light" type="button" onclick="remove_education_fields(' +
    room +
    ');"> <i class="ri-delete-bin-line fs-5"></i> </button> </div></div></form>';

  objTo.appendChild(divtest);
  feather.replace();
}

function remove_education_fields1(rid) {
  $(".removeclass" + rid).remove();
}
