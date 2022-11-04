<?php
// File download type
header('Content-type: application/pdf');

// Downloaded file name
header('Content-Disposition: attachment; filename="SinkGear.pdf"');

// Original file name
readfile('https://kbraidi.github.io/Project1/qr.pdf');
?> 