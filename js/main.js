



  $(document).ready(function(){

var Timer = setInterval(Time,1000);



  });


  setInterval(function Time() {


    var hHolder = document.getElementById('h');
        var mHolder = document.getElementById('m');
            var sHolder = document.getElementById('s');

    var time = new Date(),
        h    = time.getHours(),
        m    = time.getMinutes(),
        s    = time.getSeconds();

    hHolder.innerHTML = h;
      mHolder.innerHTML = m;
        sHolder.innerHTML = s;
  }, 1000);
