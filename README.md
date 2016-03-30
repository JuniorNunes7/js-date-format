JavaScript Date Format
==================================================================================================

Char functions:
--------------------------------------------
- d = Day (31)
- m = Month (12)
- Y = Full Year (2016)
- H = Hour (23)
- i = Minutes (59)
- s = Seconds (59)
- \\\ = Escape

Use Examples:
--------------------------------------------

    var date = new Date("1992-11-19 22:29");
    console.log(date.format('d/m/Y à\\s H:i')); //Escape example
    
    Result: 19/11/1992 às 22:29


    var date = new Date();
    console.log(date.format('H:i:s'));
    
    Result: 10:02:55
  

    var date = new Date();
    console.log(date.format('Y-m-d'));
    
    Result: 2016-03-30
