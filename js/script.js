var array = [];
var allSlides = [];
var names = [];
var friends = [];
$.ajax({
    url: 'https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        for (k = 0; k < data.length; k++) {
            for (var i = 0; i < data[k].skills.length; i++) {
                array.push(data[k].skills[i]);
            }
        }
        array = _.uniq(array);
        array = _.sortBy(array);
        console.log(array);

        var resp = data;
        var result = _.sortBy(data, ['friends.length']);
        for (var j = 0; j < data.length; j++) {
            names.push(result[j].name);
        }
        console.log("names: ", names);

        var arr = [];
        _.forEach(resp, function(value) {
            var friends = value.friends;
            _.forEach(friends, function(value) {
                var name = value.name;
                arr.push(name);
            });
        });
        console.log(arr);
    }
});









// for(var i = 0; i < data.length; i++)
//   array.push(data[i].skills);
//   _.uniq(array[i]);
//   var arrayConcat = allSlides.concat(array[i]);
//   console.log(arrayConcat);
