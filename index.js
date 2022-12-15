function RemoveDuplicate(STR, N )
{
    var s = new Set();
    for (var i = 0; i < N ; i++)
    s.add(STR(i));
    for (const v of s)
    {
        document.write(v);
    }
}
var STR = "abcadeecfb" ;
var N = STR.length;
RemoveDuplicate(STR, N);


function CountAlph(STR, N )
  {
    var d = new Map();

    STR.split('').forEach( N => {
      if (d.has(N))
      {
        d.set(N, d.get(N)+1);
      }
      else 
      {
        d.set(N, 1);
      }
    });
    STR.split('').forEach(N =>{
      if(d.has(N) && d.get(N)!=0)
      {
        console.log(N + "=" + d.get(N) + "");
        d.set(N, 0);
      }
    });
  }
  CountAlph("abcadeecfb")
