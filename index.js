setInterval(() => {
    d=new Date()
    hrs=d.getHours()
    mins=d.getMinutes()
    secs=d.getSeconds()

    hRotation=30*hrs+mins/2
    mRotation=6*mins
    sRotation=6*secs

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;
    document.getElementById('sec').style.transform=`rotate(${sRotation}deg)`;

}, 1000);