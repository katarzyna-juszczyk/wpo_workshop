var fs = require("fs");

var inputDir = "html";
var outputDir = "dist";
var templateFile = "template.html";
var placeholder = "%MAIN_CONTENT%";
var encoding = "utf8";

function file(dir, fileName) {
    return [dir, fileName].join("/");
}

fs.readdir("html", function (err, files) {
    if (err) {
        throw err;
    }
    var templateContent = fs.readFileSync(file(inputDir, templateFile), encoding);

    files.filter(name => name !== "template.html").forEach(function (name) {
        fs.readFile(file(inputDir, name), encoding, function (err, data) {
            var outputFile = file(outputDir, name);
            fs.writeFile(outputFile, templateContent.replace(placeholder, data), function (err) {
                if (err) throw err;
                console.log("Saved ", outputFile);
            });

        });
    });
});