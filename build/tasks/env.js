'use strict';

module.exports = function(grunt){
    grunt.registerTask('env', function(){
        grunt.log.writeln('Pulling environment variables and overrides...');

        var env = conf();
        var envJson = JSON.stringify(env, null, 3);

        grunt.log.writeln(envJson);
    });
};
