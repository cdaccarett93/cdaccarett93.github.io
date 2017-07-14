    var SCREEN_WIDTH = window.innerWidth,
        SCREEN_HEIGHT = window.innerHeight,
        windowHalfX = window.innerWidth / 2,
        windowHalfY = window.innerHeight / 2;

    var shape = (function () {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer({ alpha: true } );
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        renderer.setClearColor (0x000000, 1);
        document.getElementById("WebGL-output").appendChild(renderer.domElement);
        
        //LIGHTS
        var lights = [];
			lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
			lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

			lights[ 0 ].position.set( 0, 200, 0 );
			lights[ 1 ].position.set( 100, 200, 100 );
			lights[ 2 ].position.set( - 100, - 200, - 100 );

			scene.add( lights[ 0 ] );
			scene.add( lights[ 1 ] );
			scene.add( lights[ 2 ] );        
        
//        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var geometry = new THREE.DodecahedronGeometry(2,0);
        var material = new THREE.MeshPhongMaterial({
            color: 0x57575A,
            emissive: 0x151516,
            side: THREE.DoubleSide,
            shading: THREE.FlatShading
        });
        var cube = new THREE.Mesh(geometry, material);
        
        scene.add(cube);
        cube.position.y = -0.2;

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.003;
            cube.rotation.y += 0.005;

            renderer.render(scene, camera);
        };

        animate();
        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    })();