<?php
        
        $admin = file_get_contents("../data/admin.json");
        $admin_data = json_decode($admin, true);

        if($admin_data["Online"] == 1) {
                echo "online";
                exit();
        }else {
                echo "offline";
        }
        
?>