<?php
        if(isset($_COOKIE["id"])) {
                $admin = file_get_contents("../data/admin.json");
                $admin_data = json_decode($admin, true);
                if($admin_data["Cookie"] != "" && $admin_data["Cookie"] == $_COOKIE["id"]) {
                        header("Location: ../center.html");
                }else header("Location: ../dashboard.html");
        }
?>