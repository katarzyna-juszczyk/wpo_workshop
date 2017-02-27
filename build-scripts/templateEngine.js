var fs = require("fs");

var inputDir = "src";
var outputDir = "dist";
var templateFile = "template.html";
var extension = ".html";
var placeholder = "%MAIN_CONTENT%";
var encoding = "utf8";

function file(dir, fileName) {
    return [dir, fileName].join("/");
}

function supportedFile(name) {
    return name !== templateFile && name.endsWith(extension);
}

function panic(err) {
    if(err) throw err;
}

function templateContent() {
    return fs.readFileSync(file(inputDir, templateFile), encoding);
}

fs.readdir(inputDir, function (err, files) {
    panic(err);
    files.filter(supportedFile).forEach(function (name) {
        fs.readFile(file(inputDir, name), encoding, function (err, data) {
            var outputFile = file(outputDir, name);
            fs.writeFile(outputFile, templateContent().replace(placeholder, data), function (err) {
                panic(err);
                console.log("Saved ", outputFile);
            });

        });
    });
});