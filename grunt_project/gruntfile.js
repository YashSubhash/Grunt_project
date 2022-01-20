module.exports = function(grunt){

    // require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),


        autoprefixer:{
            options:{
                browsers:['last 2 versions','firefox>3']
            },
            your_target:{

            }
        },

        watch:{
            files:['css_files/style.css','index.html'],
            tasks:['autoprefixer']
        },

        copy:{
            cssfiles:'css_files/style.css',
            htmlfiles:'source_files/index.html'
        },

        cssmin:{
            target:{
                files:{
                    'css_files/minfile.css':['css_files/style.css']
                }
            }
        },

        imagemin:{
            files:{
                expand:true,
                cwd:'images/',
                src:['**/*.{jpg,png,gif}'],
                dest:'images/resized_images'
            }
        },

        connect:{ 
            server:{
                options:{
                    port:8000,
                    base:'source_files/',
                    keepalive:true
                }
            }
        },
    }),

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default',['autoprefixer'])
}