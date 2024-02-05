<?php
// luo_tietokanta_yhteys.php
$servername = "localhost";
$username = "root";  
$password = "";      
$dbname = "renkaat";

// Luo yhteys
$conn = new mysqli($servername, $username, $password, $dbname);

// Tarkista yhteys
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Renkaat Haku</title>
</head>
<body>
    <style>
        body 
        {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        header 
        {
            background-color: #ec0493;
            color: #fff;
            text-align: center;

        }

        img 
        {
            display: block;
            margin: 0 auto;
        }

        main 
        {
            padding: 20px;
        }

        #search-section 
        {
            margin-bottom: 20px;
        }

        footer 
        {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: left;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>

    <header>
        <img src="logo_dark.jpg" alt="">
    </header>

    <main>
        <section id="search-section">
            <label for="tire-size">Valitse renkaan koko:</label>

            <select id="tire-size" name="tire-size">
                <?php
                    // SQL-kysely renkaiden koot
                    $koko_query = "SELECT DISTINCT Koko FROM renkaat";
                    $koko_result = $conn->query($koko_query);

                    if ($koko_result->num_rows > 0) 
                    {
                        while ($koko_row = $koko_result->fetch_assoc()) 
                        {
                            echo "<option value='" . $koko_row["Koko"] . "'>" . $koko_row["Koko"] . "</option>";
                        }
                    }
                ?>
            </select>

            <button onclick="searchTires()">Hae renkaat</button>
        </section>

        <section id="results-section">
            <!-- Sisällytä renkaiden tiedot täältä -->
            <?php
                // Tarkista onko käyttäjä valinnut renkaan koon
                if (isset($_POST['selected_size'])) 
                {
                    $selected_size = $_POST['selected_size'];

                    // Tee SQL-kysely valitun koon perusteella
                    $sql = "SELECT * FROM renkaat WHERE Koko = '$selected_size'";
                    $result = $conn->query($sql);

                    // Tulosta hakutulokset
                    if ($result->num_rows > 0) 
                    {
                        while ($row = $result->fetch_assoc()) 
                        {
                            echo "<p>ID: " . $row["RengasID"]. " - Merkki: " . $row["Merkki"]. " - Malli: " . $row["Malli"]. " - Koko: " . $row["Koko"]. " - Hinta: " . $row["Hinta"]. " - Saldo: " . $row["Saldo"]. "</p>";
                        }
                    } else {
                        echo "Ei hakutuloksia valitulla koolla";
                    }
                } 
                
                else 
                {
                    echo "";
                }
            ?>
        </section>
    </main>

    <footer>
        <h3>Yrityksen perustiedot</h3>
        <p>Mustapään Auto Oy</p>
        <p>Mustat Renkaat</p>
        <p>Kosteenkatu 1, 86300 Oulainen</p>
        <p>Puh. 040-7128158</p>
        <p>email. myyntimies@mustatrenkaat.net</p>
    </footer>

    <script>
        function searchTires() 
        {
            var selectedSize = document.getElementById("tire-size").value;

            // Tehdään AJAX-pyyntö ja päivitetään hakutulokset
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById("results-section").innerHTML = xhr.responseText;
                }
            };
            xhr.open("POST", "hae_renkaat.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("selected_size=" + selectedSize);
        }
    </script>
</body>
</html>
