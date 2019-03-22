var network;

function init(htmlElementId) {
    make.Default.path = '../'; //指定模型库的目录
    network = new mono.Network3D(); //创建3D显示视图
    network.setClearColor('#39609B');
    var box = network.getDataBox(); //创建容器
    network.isSelectable = function(element) { return false };

    //镜头shezhi
    var camera = new mono.PerspectiveCamera(30, 1.5, 30, 30000); //新建镜头对象
    // var camera = network.getCamera();获取network镜头对象
    // camera.setPosition(-4000, 3000, -6000);//镜头位置
    // camera.setPosition(4000, 3000, 6000); //镜头位置
    camera.setPosition(4000, 3000, 5000); //镜头位置
    camera.lookAt(new mono.Vec3(0, 0, 0)); //设置镜头焦点
    network.setCamera(camera);
    // 交互设置
    var interaction = network.getDefaultInteraction();
    interaction.yLowerLimitAngle = Math.PI / 180 * 2;
    interaction.yUpLimitAngle = Math.PI / 2;
    interaction.maxDistance = 20000;
    interaction.minDistance = 30;
    interaction.zoomSpeed = 3;
    interaction.panSpeed = 0.2;

    //获取包含底层、network和底层画布的div元素
    document.getElementById('main').appendChild(network.getRootView());
    //自动根据窗口大小调整network的大小
    mono.Utils.autoAdjustNetworkBounds(network, document.documentElement, 'clientWidth', 'clientHeight');

    //光源设置
    var pointLight = new mono.PointLight(0xFFFFFF, 0.1);
    pointLight.setPosition(8000, 8000, 8000);
    box.add(pointLight);
    box.add(new mono.AmbientLight('white')); //光源颜色

    //设置FPS
    // network.setShowFps(true);

    /**
     * 双击找到第一个目标物体，切换动画
     */
    //获取network顶层dom元素
    network.getRootView().addEventListener('dblclick', function(e) {
        handleDoubleClick(e, network);
    });


    //显示坐标轴
    // network.setShowAxis(true);
    // network.setShowAxisText(true);


    //加载地板、墙、摄像头、植物、电视等数据
    var object3ds = make.Default.load(data.jsonObject);
    for (var i = 0; i < object3ds.length; i++) {
        var obj = object3ds[i];
        network.getDataBox().addByDescendant(obj); //添加数据
    }

    //接待桌
    make.Default.load('twaver.meeting.receptionDesk', function(objects) {
        objects.setPosition(700, 60, -800);
        network.getDataBox().addByDescendant(objects);
    })

    //灭火器
    make.Default.load('twaver.idc.fire', function(objects) {
        objects.setPosition(-50, 40, -950);
        network.getDataBox().addByDescendant(objects);
    })

    //空调
    var object3d = make.Default.load('twaver.idc.airCondition');
    object3d.setPosition(-800, object3d.getHeight() / 2, -900)
    network.getDataBox().addByDescendant(object3d);

    //ups 
    var object3d = make.Default.load('twaver.idc.ups1');
    object3d.setPosition(-200, object3d.getHeight() / 2, -900)
    network.getDataBox().addByDescendant(object3d);

    //机柜
    createRacks();


    //烟雾
    var smokes = make.Default.load(data.smoke);
    for (var i = 0; i < smokes.length; i++) {
        var obj = smokes[i];
        network.getDataBox().addByDescendant(obj); //添加数据
    }
    startSmokeAnimation(network);

    //红外线
    var lasers = make.Default.load(data.laser);
    for (var i = 0; i < lasers.length; i++) {
        network.getDataBox().addByDescendant(lasers[i]);

    }

    //走线
    var connections = make.Default.load(data.line);
    for (var i = 0; i < connections.length; i++) {
        var obj = connections[i];
        network.getDataBox().addByDescendant(obj); //添加数据
    }

    //漏水
    var watercables = make.Default.load(data.watercable);
    for (var i = 0; i < watercables.length; i++) {
        var obj = watercables[i];
        network.getDataBox().addByDescendant(obj); //添加数据
    }

    // createWaterLeaking(box)

    //走线架
    var rail = createRail(data.railInfo);
    box.add(rail);

    //导航条
    var buttons = [{
            label: '场景复位',
            icon: 'reset.png',
            clickFunction: function() {
                resetView(network);
            }
        },
        {
            label: '走线管理',
            icon: 'connection.png',
            clickFunction: function() {
                var showing = network.connectionView;
                resetView(network);
                if (!showing) {
                    toggleConnectionView(network);
                }
            }
        },
        {
            label: '空调风向',
            icon: 'air.png',
            clickFunction: function() {
                var showing = network.airView;
                resetView(network);
                if (!showing) {
                    toggleAirView(network);
                }
            }
        }, {
            label: '烟雾监控',
            icon: 'smoke.png',
            clickFunction: function() {
                var showing = network.smokeView;
                resetView(network);
                if (!showing) {
                    toggleSmokeView(network);
                }
            }
        },
        {
            label: '漏水监测',
            icon: 'water.png',
            clickFunction: function() {
                var showing = network.waterView;
                resetView(network);
                if (!showing) {
                    toggleWaterView(network);
                }
            }
        }, {
            label: '防盗监控',
            icon: 'security.png',
            clickFunction: function() {
                var showing = network.laserView;
                resetView(network);
                if (!showing) {
                    toggleLaserView(network);
                }
            }
        },
        {
            label: '人工路径',
            icon: 'person.png'
        },
        {
            label: '拖拽机柜',
            icon: 'edit.png'
        }, {
            label: '可用空间',
            icon: 'space.png'
        },
        {
            label: '温度图',
            icon: 'temperature.png'
        },
        {
            label: '机柜利用率',
            icon: 'usage.png'
        },
        {
            label: '供电电缆',
            icon: 'power.png'
        },
        {
            label: '告警巡航',
            icon: 'alarm.png'
        }
    ]
    setupToolbar(buttons);

}

function toggleConnectionView(network) {
    network.connectionView = !network.connectionView;

    var connectionView = network.connectionView;
    var box = network.getDataBox();
    demo.typeFinder = new mono.QuickFinder(network.getDataBox(), 'type', 'client');
    var connections = demo.typeFinder.find('connection');
    var rails = demo.typeFinder.find('rail');
    connections.forEach(function(connection) {
        connection.setVisible(connectionView);
        if (!connection.billboard) {
            connection.billboard = new mono.Billboard();
            connection.billboard.s({
                'm.texture.image': demo.createConnectionBillboardImage('0'),
                'm.vertical': true,
            });
            connection.billboard.setScale(60, 30, 1);
            connection.billboard.setPosition(680, 230, 450);
            box.add(connection.billboard);
        }
        connection.billboard.setVisible(connectionView);
        if (connection.isVisible()) {
            var offsetAnimate = new twaver.Animate({
                from: 0,
                to: 1,
                type: 'number',
                dur: 1000,
                repeat: Number.POSITIVE_INFINITY,
                reverse: false,
                onUpdate: function(value) {
                    connection.s({
                        'm.texture.offset': new mono.Vec2(value, 0),
                    });
                    if (value === 1) {
                        var text = '54' + parseInt(Math.random() * 10) + '.' + parseInt(Math.random() * 100);
                        connection.billboard.s({
                            'm.texture.image': demo.createConnectionBillboardImage(text),
                        });
                    }
                },
            });
            offsetAnimate.play();
            connection.offsetAnimate = offsetAnimate;
        } else {
            if (connection.offsetAnimate) {
                connection.offsetAnimate.stop();
            }
        }
    });
    rails.forEach(function(rail) {
        rail.setVisible(connectionView);
    });
}

function resetView(network) {
    demo.resetCamera(network);
    var loRackDoors = []; ////机柜的门 数组
    network.getDataBox().forEach(function(element) {
        if (element.getClient('type') === 'rack_door') {
            loRackDoors.push(element); //机柜的门
        }
        if (element.getClient('type') == 'rack') {
            element.setClient('loaded.func', undefined);
        }
    });

    // reset rack door
    for (var i = 0; i < loRackDoors.length; i++) {
        var rackDoor = loRackDoors[i];
        // rackDoor.getClient('parentRack').setClient('loaded', false); //重置属性
        if (rackDoor.getClient('animated')) {
            make.Default.playAnimation(rackDoor, rackDoor.getClient('animation'));
        }
    }
    var loadedcard = [];
    network.getDataBox().forEach(function(element) {
        if (element.getClient('type') === 'card') {
            loadedcard.push(element);
        }
    });

    for (var i = 0; i < loadedcard.length; i++) {
        var card = loadedcard[i];
        if (card.getClient('animated')) {
            make.Default.playAnimation(card, card.getClient('animation'));
        }
    }
    //reset room door
    var doors = [];
    network.getDataBox().forEach(function(element) {
        if (element.getClient('type') === 'door' || element.getClient('type') === 'right-door') {
            doors.push(element);
        }
    });
    for (var i = 0; i < doors.length; i++) {
        var door = doors[i];
        if (door.getClient('animated')) {
            make.Default.playAnimation(door, door.getClient('animation'));
        }
    }
    //复位机柜内设备
    var equs = [];
    network.getDataBox().forEachReverse(function(element) {
        if (element == undefined) return;
        for (var i = 1; i <= 8; i++) {
            if (element.getClient('type') == 'equ' + i) {
                // network.getDataBox().removeByDescendant(element);移除设备
                equs.push(element);
            }
        }
    })
    for (var i = 0; i < equs.length; i++) {
        var equ = equs[i];
        if (equ.getClient('animated')) {
            make.Default.playAnimation(equ, equ.getClient('animation'));
        }
    }

    // reset view
    if (network.connectionView) {
        toggleConnectionView(network);
    }
    if (network.airView) {
        toggleAirView(network);
    }
    if (network.smokeView) {
        toggleSmokeView(network);
    }
    if (network.laserView) {
        toggleLaserView(network)
    }
    if (network.waterView) {
        toggleWaterView(network)
    }
}

/**
 * 电路卡板
 */
function creatorCards(x, y, z) {
    var cardNums = 10; //机柜宽度60-10除以卡板宽度5 ,卡板高度为50
    for (var i = 0; i < cardNums; i++) {
        var card = make.Default.load({ id: "twaver.idc.card" });
        card.setPositionX(x + (i * 5) - 22.5);
        card.setPositionY(y + 25);
        card.setPositionZ(z + 25);
        network.getDataBox().addByDescendant(card);
    }
}

/**
 * 服务器设备
 */
function creatorNetWorkDevices(x, y, z, json) {
    var udevice = make.Default.load(json);
    var d = 4.445; //每u之间的差值
    var a1 = 4.445; //1u设备的高度

    for (var i = 0; i < udevice.length; i++) {
        var u = udevice[i];
        var n = i + 1;
        var sn = n * a1 + n * (n - 1) * d / 2; //等差数列求和
        u.setPositionX(x)
        u.setPositionY(50 + y + sn);
        u.setPositionZ(z)
        network.getDataBox().addByDescendant(u); //添加数据
    }
}

function creatorComboDevices(x, y, z, json) {
    creatorCards(x, y, z);
    creatorNetWorkDevices(x, y, z, json)
}

function setupToolbar(buttons) {
    var count = buttons.length;
    var step = 32;

    var div = document.createElement('div');
    div.setAttribute('id', 'toolbar');
    div.style.display = 'block';
    div.style.position = 'absolute';
    div.style.left = '10px';
    div.style.top = '100px';
    div.style.width = '32px';
    div.style.height = (count * step + step) + 'px';
    div.style.background = 'rgba(255,255,255,0.75)';
    div.style['border-radius'] = '5px';
    document.body.appendChild(div);

    for (var i = 0; i < count; i++) {
        var button = buttons[i];
        var icon = button.icon;
        var img = document.createElement('img');
        img.style.position = 'absolute';
        img.style.left = '4px';
        img.style.top = (step / 2 + (i * step)) + 'px';
        img.style['cursor'] = 'pointer';
        img.style['pointer-events'] = 'auto';
        img.setAttribute('src', demo.getRes(icon));
        img.style.width = '24px';
        img.style.height = '24px';
        img.setAttribute('title', button.label);
        img.onclick = button.clickFunction;
        div.appendChild(img);
    }
}

function createRacks() {
    var rackNumber = 20;
    var rackWidth = 71;

    for (var i = 0; i < rackNumber; i++) {
        var equip = make.Default.load({
            'id': 'twaver.idc.rack200',
            'label': (function() {
                var label = 'A';
                if (i < 9) {
                    label += '0';
                }
                label += (i + 1)
                return label;
            })(i)
        }); //equip is comboNode
        var equip_1 = make.Default.load({
            'id': 'twaver.idc.rack200',
            'severity': 'mono.AlarmSeverity.CRITICAL',
            'label': (function() {
                var label = 'B';
                if (i < 9) {
                    label += '0';
                }
                label += (i + 1)
                return label;
            })(i)
        });

        var equip_2 = make.Default.load({
            'id': 'twaver.idc.rack200',
            'label': (function() {
                var label = 'C';
                if (i < 9) {
                    label += '0';
                }
                label += (i + 1);
                return label;
            })(i)
        });
        equip.setPositionX(-rackNumber / 4 * rackWidth + rackWidth / 2 - 500 + i * rackWidth / 2);
        equip_1.setPositionX(-rackNumber / 4 * rackWidth + rackWidth / 2 + 500 + i * rackWidth / 2);
        equip_2.setPositionX(-rackNumber / 4 * rackWidth + rackWidth / 2 - 500 + i * rackWidth / 2);

        equip.setPositionY(100);
        equip_1.setPositionY(100);
        equip_2.setPositionY(100);
        var start = -rackNumber / 4 * rackWidth + 35
        var gap = rackWidth - 50;
        if (i % 2 == 0) {
            creatorComboDevices(start + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, -400, data.cardjson);
            creatorComboDevices(start + (50 + i / 2 * gap + (i / 2 - 1) * 50) + 500, 0, 400, data.cardjson);
            creatorComboDevices(start + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, 400, data.cardjson);
            equip.setPositionZ(-400);
            equip_1.setPositionZ(400);
            equip_2.setPositionZ(400);
        } else {
            creatorComboDevices(start - 35 + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, -600, data.cardjson);
            creatorComboDevices(start - 35 + (50 + i / 2 * gap + (i / 2 - 1) * 50) + 500, 0, 600, data.cardjson);
            creatorComboDevices(start - 35 + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, 600, data.cardjson);
            equip.setPositionX(equip.getX() - 35);
            equip_1.setPositionX(equip_1.getX() - 35);
            equip_2.setPositionX(equip_2.getX() - 35);
            equip.setPositionZ(-600);
            equip_1.setPositionZ(600);
            equip_2.setPositionZ(600);
        }

        network.getDataBox().addByDescendant(equip);
        network.getDataBox().addByDescendant(equip_1);
        network.getDataBox().addByDescendant(equip_2);
    }
}

function createRail(params) {
    var rail = demo.createPathObject(params);
    rail.s({
        'm.texture.image': '../res/images/rail.png',
        'm.type': 'phong',
        'm.transparent': true,
        'm.color': '#CEECF5',
        'm.ambient': '#CEECF5',
        'aside.m.visible': false,
        'zside.m.visible': false,
        'm.specularStrength': 50,
    });
    rail.setPositionY(268);
    rail.setVisible(false);
    rail.setClient('type', 'rail');
    return rail;
}

function createWaterLeaking(bx) {
    var sign = new mono.Billboard();
    sign.s({
        'm.texture.image': '../res/images/alert.png'
    })
    sign.setScale(80, 160, 1);
    sign.setPosition(300, 95, 50);
    bx.add(sign);

    var ball = new mono.Sphere();
    ball.s({
        'm.transparent': true,
        'm.opacity': 0.8,
        'm.type': 'phong',
        'm.color': '#58FAD0',
        'm.ambient': '#81BEF7',
        'm.specularStrength': 50,
        'm.normalmap.image': '../res/images/rack_inside_normal.jpg',
    })
    ball.setPosition(300, 10, 50);
    ball.setScale(1, 0.1, 0.7);
    bx.add(ball);

    bx.waterLeakingObjects = [sign, ball];
}

/**
 * 路径规划
 */
function loadObj() {
    //加载人物模型
    var obj = demo.getRes('worker.obj');
    var mtl = demo.getRes('worker.mtl');
    var loader = new mono.OBJMTLLoader(); //解析obj文件生成相关3D对象
    loader.load(obj, mtl, { 'worker': demo.getRes('worker.png'), }, function(object) {
        object.setScale(3, 3, 3);
        object.setClient('type', 'person');
        box.addByDescendant(object);

        var updater = function(element) {
            if (element && element.getChildren()) {
                element.getChildren().forEach(function(child) {
                    child.setStyle('m.normalType', mono.NormalTypeSmooth); //平滑效果
                    updater(child);
                })
            }
        }
        updater(object);

        var cameraFollow = new cameraFollow();
        cameraFollow.setHost(object);
        var leftDoor = demo.typeFiner.findFirst('left-door');
        var rightDoor = demo.typeFiner.findFirst('right-door');
        demo.playAnimation(leftDoor, leftDoor.getClient('animation'));
        demo.playAnimation(rightDoor, rightDoor.getClient('animation'), function() {
            object.animate = demo.createPathAnimates(camera, object, points, false, null, function() {
                demo._playRackDoorAnimate('A03');
            });
            object.animate.play()
        })
        var x = -650,
            z = 600,
            angle = 0;
        object.setPosition(x, 0, z);
        object.setPositionY(angle);
        var path = new mono.Path();
        path.moveTo(object.getPositionX(), object.getPositionY());
        for (var i = 0; i < points.length; i++) {
            path.lineTo(points[i][0], points[i][1]);
        }
        path = mono.PathNode.prototype.adjustPath(path, 20);
        var trail = new mono.PathCube(path, 10, 3);
        trail.s({
            'm.type': 'phone',
            'm.specularStrength': 30,
            'm.color': '#298A08',
            'm.ambient': '#298A08',
            'm.texture.image': demo.getRes('flow.jpg'),
            'm.texture.repeat': new mono.Vec2(150, 1),
        });
        trail.setRotationX(Math.PI);
        trail.setPositionY(5);
        trail.setClient('type', 'trail');
        box.add(trail)
    })

}

function createAirPlanes() {
    var planes = [];
    var wavePath = new mono.Path();
    wavePath.moveTo(0, 0, 230);
    wavePath.curveTo(0, 80, 200, 0, 100, 80);
    wavePath.curveTo(0, 120, 30, 0, 200, 0);

    var creator = function(length, x, z) {
        var path = new mono.Path();
        path.moveTo(0, 0, 0);
        path.lineTo(length, 0, 0);
        var curvePlane = new mono.CurvePlane(path, wavePath); //根据水平方向的路径和垂直方向的路径，自定义一个面，没有厚度
        curvePlane.setPosition(x, 0, z);
        curvePlane.s({
            'm.texture.image': demo.getRes('arrow.png'),
            'm.side': 'both',
            'm.texture.repeat': new mono.Vec2(parseInt(length / 50), 8),
            'm.transparent': true,
            'm.gradient': { 0: '#84DF29', 0.6: '#DF6029', 1: '#DF2929' },
            'm.gradientType': 2
        });
        var airAnimation = new twaver.Animate({
            from: 0,
            to: 1,
            dur: 1000,
            repeat: Number.POSITIVE_INFINITY,
            reverse: false,
            onUpdate: function(value) {
                curvePlane.s({
                    //纹理重复的偏移量，横向和纵向在图片上的坐标偏移
                    'm.texture.offset': new mono.Vec2(0, -value),
                })
            }
        })
        curvePlane.airAnimation = airAnimation;
        return curvePlane;
    }
    planes.push(creator(450, 300, 500));
    planes.push(creator(195, -610, 500));
    planes.push(creator(250, -600, -500));
    return planes;
}

function toggleAirView(nt) {
    nt.airView = !nt.airView;
    if (!nt.getDataBox().airPlanes) {
        nt.getDataBox().airPlanes = createAirPlanes();
    }
    for (var i = 0; i < nt.getDataBox().airPlanes.length; i++) {
        var plane = nt.getDataBox().airPlanes[i]
        if (nt.airView) {
            nt.getDataBox().add(plane);
            plane.airAnimation.play();
        } else {
            nt.getDataBox().remove(plane);
            plane.airAnimation.stop();
        }
    }
}

function toggleSmokeView(network) {
    network.smokeView = !network.smokeView;
    network.getDataBox().forEach(function(element) {
        var type = element.getClient('type');
        if (type === 'smoke') {
            element.setVisible(network.smokeView);
        }
    })
}

//烟雾动画
function updateSmoke(nt) {
    return function() {
        if (nt.smokeView) {
            nt.getDataBox().forEach(function(element) {
                if (element.getClient('type') === 'smoke' && element.isVisible()) {
                    var smoke = element;
                    var count = smoke.vertices.length;
                    for (var i = 0; i < count; i++) {
                        var point = smoke.vertices[i];
                        point.y = Math.random() * 200;
                        point.x = Math.random() * point.y / 2 - point.y / 4;
                        point.z = Math.random() * point.y / 2 - point.y / 4
                    }
                    smoke.verticesNeedUpdate = true;
                    network.dirtyNetwork(); // ??
                }
            })
        }
    }
}

function startSmokeAnimation(nt) {
    setInterval(updateSmoke(nt), 200);
}

//防盗监测，创建红外线
function toggleLaserView(nt) {
    nt.laserView = !nt.laserView;
    nt.getDataBox().forEach(function(element) {
        if (element.getClient('type') === 'laser') {
            element.setVisible(nt.laserView);
        }
    })
}


function toggleWaterView(nt) {
    nt.waterView = !nt.waterView;
    if (nt.waterView) {
        createWaterLeaking(nt.getDataBox());
        nt.getDataBox().oldAlarms = nt.getDataBox().getAlarmBox().toDatas();
        nt.getDataBox().getAlarmBox().clear();
    } else {
        if (nt.getDataBox().waterLeakingObjects) {
            for (var i = 0; i < nt.getDataBox().waterLeakingObjects.length; i++) {
                nt.getDataBox().remove(nt.getDataBox().waterLeakingObjects[i]);
            }
        }
        nt.getDataBox().oldAlarms.forEach(function(alarm) {
            nt.getDataBox().getAlarmBox().add(alarm);
        });
    }
    nt.getDataBox().forEach(function(element) {
        var type = element.getClient('type');
        if (type === 'watercable') {
            element.setVisible(nt.waterView);
        } else if (type && type !== 'floor' && type !== 'glass_wall' && type !== 'miehuoqi') {
            if (nt.waterView) {
                if (type === 'rack200' || type === 'rack_door') {
                    element.oldTransparent = element.getStyle('m.transparent');
                    element.oldOpacity = element.getStyle('m.opacity');
                    element.setStyle('m.transparent', true);
                    element.setStyle('m.opacity', 0.4);
                } else {
                    element.oldVisible = element.isVisible();
                    element.setStyle('m.visible', false);
                }
            } else {
                if (type === 'rack200' || type === 'rack_door') {
                    element.setStyle('m.transparent', element.oldTransparent);
                    element.setStyle('m.opacity', element.oldOpacity);
                } else {
                    element.setVisible(element.oldVisible);
                    element.setStyle('m.visible', true);
                }
            }
        }
    });
}

/**
 * 镜头移动切换
 */
var animateCamera = function(camera, interaction, oldPoint, newPoint, onDone) {
    var offset = camera.getPosition().sub(camera.getTarget());
    var animation = new twaver.Animate({
        from: 0,
        to: 1,
        dur: 500,
        easing: 'easeBoth',
        onUpdata: function(value) {
            var x = oldPoint.x + (newPoint.x - oldPoint.x) * value;
            var y = oldPoint.y + (newPoint.y - oldPoint.y) * value;
            var z = oldPoint.z + (newPoint.z - oldPoint.z) * value;
            var target = new mono.Vec3(x, y, z);
            camera.lookAt(target);
            interaction.target = target;
            var position = new mono.Vec3().addVectors(offset, target);
            camera.setCamera(position);
        }
    })
    animation.onDone = onDone;
    animation.play();
};

/**
 * 找到第一个点击的对象
 */
function findFirstObjectByMouse(nt, e) {
    var objects = nt.getElementsByMouseEvent(e);
    if (objects.length) {
        for (var i = 0; i < objects.length; i++) {
            var first = objects[i];
            var object3d = first.element;
            if (!(object3d instanceof mono.Billboard)) {
                return first;
            }
        }
    }
    return null;
}

/**
 * 双击事件
 */
function handleDoubleClick(e, nt) {
    var camera = nt.getCamera();
    var interaction = nt.getDefaultInteraction();
    var firstClickObject = findFirstObjectByMouse(nt, e);
    if (firstClickObject) {
        var element = firstClickObject.element;
        var newTarget = firstClickObject.point;
        var oldTarget = camera.getTarget();
        if (element.getClient('animation')) {
            make.Default.playAnimation(element, element.getClient('animation'))
        } else if (element.getClient('dbl.func')) {
            var func = element.getClient('dbl.func');
            func();
        } else {
            var oldTarget = camera.getTarget();
            var newTarget = new mono.Vec3(0, 0, 0);
            animateCamera(camera, interaction, oldTarget, newTarget)
        }
    }
}