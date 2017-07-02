// Judul Program
console.log('SIMULASI TERBANG PESAWAT TANPA AWAK *CSSS');
console.log('Coding Sangat Sederhana Sekali ..LOL..'
var uav = function(name, type, camera, speed, landingGear, elevator, rudder, aileron, spoiler, height, fuel) {
  this.name = name;
  this.type = type;
  this.camera = 'OFF';
  this.landingGear = 'AKTIF';
  this.speed = 0;
  this.stop = true;
  this.elevator = 'BALANCE';
  this.rudder = 'BALANCE';
  this.aileron = 'BALANCE';
  this.spoiler = 'OFF';
  this.height = 0;
  this.fuel = 100;
  
  this.activateDrone = function() {
    return console.log('Anda telah memilih pesawat ' + name 
                       + ' dengan tipe '+ type + ' untuk menjalankan misi Anda');
  }
  
  this.namingDrone = function() {
    return console.log('Anda telah memberi pesawat ini dengan nama ' + this.name);
  }
  
  this.missionBrief = function() {
    console.log('=================================================================');
    console.log('Misi terbang Anda adalah terbang dari titik A ke titik B manuver kiri mengarah ke titik C kemudian ambil Foto titik Area X mendarat di base C');
    console.log('=================================================================');
  }
  
  this.engineStart = function() {
    this.stop = false;
    return console.log('Mesin diaktifkan');
  }
  
  this.engineStop = function() {
    this.stop = true;
    return console.log('Mesin dinon-aktifkan');
  }
  
  this.speedUp = function() {
    return console.log('Kecepatan ditambah menjadi ' + this.speed + ' Knot');
  }
  
  this.speedDown = function() {
    return console.log('Kecepatan dikurangi menjadi ' + this.speed + ' Knot');
  }
  
  this.elevatorUp = function() {
    return this.elevator = 'UP';
  }
  
  this.elevatorDown = function() {
    return this.elevator = 'DOWN';
  }
  
  this.balanceState = function() {
    this.elevator = 'BALANCE';
    this.rudder = 'BALANCE';
    this.aileron = 'BALANCE';
  }
  
  this.statusDrone = function() {
    console.log('STATUS KENDALI PESAWAT');
    console.log('Elevator : ' + this.elevator);
    console.log('Rudder : ' + this.rudder);
    console.log('Aileron : ' + this.aileron);
    console.log('Spoiler : ' + this.spoiler);
    console.log('Camera : ' + this.camera);
    console.log('Landing Gear : ' + this.landingGear);
    console.log('Speed : ' + this.speed);
    console.log('Bahan Bakar : ' + this.fuel +'%');
    console.log('Ketinggian ' + this.height);
    console.log('Jarak dari markas ' + point.distance + ' Mil');
    console.log('');
  }
}

// List gambar yang akan diambil dengan camera
var targetInitialize = ['Gedung', 'Tower', 'Kontrol Darat'];

// Deklarasi Objek Checkpoint
var point = function(distance) {
  this.distance = distance;
}

// Fungsi manuver pesawat
var leftManeuver = function() {
  reaper.elevatorUp();
  reaper.aileron = 'UP';
  reaper.rudder = 'LEFT';
  point.distance = 6500;
  console.log('Pesawat melakukan manuver ke kiri');
}

var rightManeuver = function() {
  reaper.elevatorUp();
  reaper.aileron = 'DOWN';
  reaper.rudder = 'RIGHT';
  console.log('Pesawat melakukan manuver ke kanan');
}

var reaper = new uav('MQ-Reaper', 'Stealth');
var point = new point(200);

// Mulai Simulasi Pesawat
reaper.activateDrone();
reaper.name='Wotene';

reaper.namingDrone();
reaper.missionBrief();
console.log('');
console.log('Sebelum menyalakan mesin check status pesawat Anda');
reaper.statusDrone();
reaper.engineStart();
reaper.speed=80;
reaper.speedUp();

if (reaper.speed === 80) {
  console.log('Pesawat siap lepas landas/Take Off');
  reaper.elevatorUp();
  reaper.landingGear='NONAKTIF';
  reaper.speed=200;
  point.distance=200;
} else {
  console.log('Kecepatan belum maksimal, ulangi proses lepas landas');
}

// status setelah lepas landas
reaper.statusDrone();
console.log('Pacu kecepatan sampai pada ketinggian maksimal 20.000 feet');
reaper.height = 2500;

// ketinggian yang dicapai pesawat
while(reaper.height <= 20000) {
  console.log('Saat ini ketinggian pesawat Anda adalah ' + reaper.height + ' feet');
  reaper.height+=2500;
  
  if (reaper.height === 20000) {
    reaper.elevator='BALANCE';
    reaper.fuel='95';
    point.distance='300';
  }
}

console.log('');
reaper.statusDrone();
console.log('Aktifkan kecepatan supersonik pesawat sampai menempuh jarak 5000 Mil dari base A');

// mengaktifkan kecepatan supersonik
for (reaper.speed=100; reaper.speed<=400; reaper.speed+=50) {
  console.log('Kecepatan Anda mencapai ' + reaper.speed + ' Knot');
}

if (reaper.speed >= 350) {
  point.distance=5000;
  reaper.fuel=80;
  console.log('Anda telah mencapai kecepatan supersonik');
}
console.log('');
reaper.statusDrone();

// Cek jarak
var time=point.distance/reaper.speed;
console.log('Anda telah mencapai jarak 5000 Mil dari base A sekitar ' + Math.ceil(time) + ' Detik yang lalu');
if (point.distance === 5000) {
  console.log('Anda telah berada di Checkpoint B, Persiapkan pesawat untuk manuver ke kiri');
  console.log('');
}

// Pesawat melakukan manuver ke kiri
leftManeuver();
reaper.statusDrone();

console.log('Untuk menghindari radar musuh, lakukan manuver ke kanan');

// Pesawat melakukan manuver ke kanan
reaper.fuel=70;
rightManeuver();
reaper.statusDrone();

console.log('Anda telah berada dilokasi Checkpoint X, Kurangi kecepatan Anda dan Aktifkan kamera Anda dan Ambil gambar lokasi X');  
reaper.balanceState();
reaper.camera='ON';
reaper.speed=200;
reaper.speedDown();
reaper.statusDrone();

// Ambil gambar dengan camera
console.log('Ambil Gambar dengan kamera sekarang');
for (var i=0; i<3; i++ ) {
  console.log('Gambar yang diambil : ' + targetInitialize[i] + ' Checked');
  if (i === 2) {
    console.log('Misi selesai');
    console.log('');
  }
}

// Tambah kecepatan dan terbang di ketinggian rendah
console.log('Terbang rendah untuk menghindari radar musuh');
while (reaper.height >= 5000) {
  reaper.elevatorDown();
  reaper.height-=2500;
  console.log('Ketinggian saat ini ' + reaper.height);
}
console.log('');
reaper.fuel=60;
reaper.camera='OFF';
point.distance=10000;
reaper.balanceState();
reaper.statusDrone();

// Persiapan pendaratan pesawat
console.log('Anda sudah dekat ke Base C, persiapkan pesawat untuk posisi mendarat');
for (j=200; j>=0; j-- ) {
  if (j === 150) {
    reaper.speed=j;
    reaper.landingGear='AKTIF';
    reaper.height= '300';
    reaper.spoiler= 'ON';
    reaper.fuel= 40;
    point.distance= 15000;
    reaper.speedDown();
    console.log('Spoiler diaktifkan untuk mengurangi kecepatan');
    reaper.statusDrone();
  }
  
  if (j === 80) {
    reaper.speed=j;
    reaper.height=50;
    console.log('Landing Gear Touch Down, pendaratan sempurna');
    reaper.speedDown();
    reaper.statusDrone();
  }
  
  if (j === 30) {
    reaper.speed=j;
    reaper.speedDown();
    reaper.height=0;
    console.log('Aktifkan full break/rem pesawat');
    reaper.statusDrone();
  }
  
  if (j === 0) {
    reaper.speed=j;
    reaper.speedDown();
    console.log('Pesawat telah berhenti total, nonaktifkan mesin pesawat');
    reaper.engineStop();
    reaper.statusDrone();
  }
}

if (reaper.stop === true) {
  console.log('Selamat!! Misi Anda sukses. Bersiap untuk misi berikutnya.');
}













