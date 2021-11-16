
process_ph() {
    echo "minifying "$1"...";
    filename=$(basename "$1" .jpg);
    magick "$1" -resize 40%x40% -strip -interlace Plane -gaussian-blur 0.05 -quality 85% public/images/photography/$filename.jpg;
    magick "$1" -resize 50%x50%\> -strip -interlace Plane -quality 85% public/images/photography/$filename-2560.png;  
    magick "$1" -resize 80%x80%\> -strip -interlace Plane -quality 90% public/images/photography/$filename-3840.png;  
}

process_vw() {
    echo "minifying "$1"...";
    filename=$(basename "$1" .png)
    magick "$1" -resize 1300x900\> -strip -interlace Plane -gaussian-blur 0.05 -quality 85% public/images/photography/$filename.png;
    magick "$1" -resize 1920x1080\> -strip -interlace Plane -quality 85% public/images/photography/$filename-1920.png;  
    magick "$1" -resize 2560x1440\> -strip -interlace Plane -quality 90% public/images/photography/$filename-2560.png; 
}

# minify photography images
for FILE in input_photography/*; do 
    process_ph "$FILE" &
    done

# minify void world images
for FILE in input_VW/*; do 
    process_vw "$FILE" &
    done