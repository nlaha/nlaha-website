# minify photography images
for FILE in input_photography/*; do 
    echo "minifying $FILE...";
    filename=$(basename "$FILE")
    magick $FILE -resize 40%x40% -strip -interlace Plane -gaussian-blur 0.05 -quality 85% public/images/photography/$filename; 
    done

# minify void world images
for FILE in input_VW/*; do 
    echo "minifying $FILE...";
    filename=$(basename "$FILE")
    magick $FILE -resize 1300x900\> -strip -interlace Plane -gaussian-blur 0.05 -quality 85% public/images/photography/$filename; 
    done
