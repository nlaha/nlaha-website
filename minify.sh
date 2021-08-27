for FILE in input_photography/*; do 
    echo "minifying $FILE...";
    filename=$(basename "$FILE")
    magick $FILE -resize 40%x40% -strip -interlace Plane -gaussian-blur 0.05 -quality 85% public/images/photography/$filename; 
    done
