<?php
    $boardFileObj = fopen("../data/game_board", "w");
    
    $rows = file("../data/template_board", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $blank = [];
    $i = 0;
    foreach( $rows as $row ) {
        $r = array_map("intval", explode(" ", $row));
        $blank[$i] = $r;
        $i++;
    }

    $i = 0;
    foreach( $blank as $row ) {
        $r = implode(" ", $row);
        fwrite( $boardFileObj, $r . PHP_EOL);
        $i++;
    }

    fclose($boardFileObj);

    
?>