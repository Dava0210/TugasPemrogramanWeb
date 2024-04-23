

 
      var text = "Saya Adalah Mahasiswa Teknik Informatika Yang Sedang Mengejarkan Tugas Dari Matakuliah Pemrograman Web";
      var speed = 100; // milliseconds per character

      function typeWriter() {
        if (text.length > 0) {
          document.getElementById("typewriter").innerHTML += text.charAt(0);
          text = text.substring(1);
          setTimeout(typeWriter, speed);
        }
      }

      typeWriter();
   