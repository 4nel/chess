<?php
        $key = $_POST["key"];

        $admin = file_get_contents("../data/admin.json");
        $admin_data = json_decode($admin, true);
        
        if(hash("sha256", $key) == $admin_data["Key"]) {
                
                $new = "1234567891011";
                
                $new = hash("sha256", $new);

                setcookie("id", $new, time(), "/");
                $admin_data["Cookie"] = $new;

                $admin_data["Online"] = true;
                $admin_data = json_encode( $admin_data, JSON_PRETTY_PRINT );
                
                file_put_contents("../data/admin.json", $admin_data);
                
                echo "../center.html";
                exit();
        }
        echo "../admin.html";
?>