const gulp = require("gulp");
const bump = require("gulp-bump");
const octo = require("@octopusdeploy/gulp-octo");

gulp.task("bump", function() {
  return gulp
    .src("./package.json")
    .pipe(bump({ type: "patch" }))
    .pipe(gulp.dest("./"));
});

// package into dist directory
gulp.task("pack", function() {
  return gulp
    .src(["dist/**"])
    .pipe(octo.pack("zip", { id: "Flightdeck.UI" }))
    .pipe(
      octo.push({
        apiKey: "API-JGVOWWUJYCFNVPT0BSOT12SE8",
        host: "http://auawsdevcicd2/",
        replace: true
      })
    );
});

gulp.task("publish", gulp.series("bump", "pack"));
