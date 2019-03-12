$(function () {


    var leftArr = $("#leftArrow");
    var rightArr = $("#rightArrow");
    var secondSlider = $(".secondSlider");
    var firstSlider = $(".firstSlider");
    var mainImage = $("#mainImage");
    var onePazzle = $(".onePazzle");
    var shadowBg = $(".shadowBackground");
    var finish = $(".finish");
    var btnReload = $(".reload");
    var sliderIndex = 0;
    var otstupLeft = 0;


    for (let i = 0; i < 70;) {
        $('<img src="images/malisharikiNew/pazzle' + (++i) + '.png" alt="pazzle">').css({
            position: "absolute",
            opacity: "0.2"
        }).appendTo(mainImage);

    } //создаём пазлы на игровом поле

    for (let i = 0; i < mainImage.children().length; i++) {
        if (i < 10) {
            mainImage.children().eq(i).css({
                top: 0
            });
        } // "top" for first string
        if (i >= 10 && i < 20) {
            if (i % 2 == 0) {
                mainImage.children().eq(i).css({
                    top: "36px"
                });
            } else {
                mainImage.children().eq(i).css({
                    top: "51px"
                });
            }
        } // "top" for second string
        if (i >= 20 && i < 30) {
            if (i % 2 == 0) {
                mainImage.children().eq(i).css({
                    top: "110px"
                });
            } else {
                mainImage.children().eq(i).css({
                    top: "95px"
                });
            }
        } // "top" for third string
        if (i >= 30 && i < 40) {
            if (i % 2 == 0) {
                mainImage.children().eq(i).css({
                    top: "153px"
                });
            } else {
                mainImage.children().eq(i).css({
                    top: "168px"
                });
            }
        } // "top" for firth string
        if (i >= 40 && i < 50) {
            if (i % 2 == 0) {
                mainImage.children().eq(i).css({
                    top: "227px"
                });
            } else {
                mainImage.children().eq(i).css({
                    top: "212px"
                });
            }
        } // "top" for fifth string
        if (i >= 50 && i < 60) {
            if (i % 2 == 0) {
                mainImage.children().eq(i).css({
                    top: "270px"
                });
            } else {
                mainImage.children().eq(i).css({
                    top: "285px"
                });
            }
        } // "top" for sixth string
        if (i >= 60 && i < 70) {
            if (i % 2 == 0) {
                mainImage.children().eq(i).css({
                    top: "344px"
                });
            } else {
                mainImage.children().eq(i).css({
                    top: "329px"
                });
            }
        } // "top" for seventh string
        if (i < 10 || i >= 20 && i < 30 || i >= 40 && i < 50 || i >= 60 && i < 70) {
            if (i == 0 || i == 20 || i == 40 || i == 60) {
                mainImage.children().eq(i).css({
                    left: otstupLeft
                });
            } else if (i == 1 || i == 21 || i == 41 || i == 61) {
                otstupLeft += 56;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
            } else if (i == 3 || i == 7 || i == 23 || i == 27 || i == 43 || i == 47 || i == 63 || i == 67) {
                otstupLeft += 73;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
            } else if (i == 5 || i == 9 || i == 25 || i == 29 || i == 45 || i == 49 || i == 65 || i == 69) {
                otstupLeft += 74;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
                if (i == 9 || i == 29 || i == 49 || i == 69) {
                    otstupLeft = 0;
                }
            } else {
                otstupLeft += 44;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
            }
        } //нечетная строка
        if (i >= 10 && i < 20 || i >= 30 && i < 40 || i >= 50 && i < 60) {
            if (i == 10 || i == 30 || i == 50) {
                mainImage.children().eq(i).css({
                    left: otstupLeft
                });
            } else if (i == 11 || i == 31 || i == 51) {
                otstupLeft += 41;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
            } else if (i == 13 || i == 17 || i == 33 || i == 37 || i == 53 || i == 57) {
                otstupLeft += 43;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
            } else if (i == 15 || i == 19 || i == 35 || i == 39 || i == 55 || i == 59) {
                otstupLeft += 44;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
                if (i == 19 || i == 39 || i == 59) {
                    otstupLeft = 0;
                }
            } else {
                otstupLeft += 74;
                mainImage.children().eq(i).css({
                    left: otstupLeft + "px"
                });
            }
        } // чётная строка  
    } //позиционирование для созданных пазлов
    mainImage.children("img").eq(0).addClass("topLeftCorner");
    mainImage.children("img").eq(9).addClass("topRightCorner");
    mainImage.children("img").eq(60).addClass("lowerLeftCorner");
    mainImage.children("img").eq(69).addClass("lowerRightCorner");

    firstSlider.eq(sliderIndex).addClass("activeSlider");
    secondSlider.eq(sliderIndex).addClass("activeSlider");

    mainImage.children().click(function () {
        if ($(".activeSlider").children(".activePazzle") != undefined) { //есть ли активный пазл в слайдерах
            if ($(this).attr("src") == $(".activeSlider").children(".activePazzle").children().attr("src")) { //если есть, сравниваем его src и src кликнутого пазла на игровом поле
                $(this).css({
                    opacity: "1"
                }); //если совпадают, меняем opasity
                $(".activeSlider").children(".activePazzle").remove(); //удаляем пазл из слайдера
                mainImage.toggleClass("successful"); //зеленая рамка для игрового поля
                setTimeout(function () {
                    mainImage.toggleClass("successful");
                }, 1000); //убираем зеленую рамку
                if ($(".firstSlider.activeSlider").siblings(".firstSlider").length > 0 || $(".firstSlider.activeSlider").siblings(".secondSlider").length > 1) {
                    if ($(".firstSlider.activeSlider").children().length < 7 && $(".firstSlider").last().children(".onePazzle").length > 0) {
                        $(".firstSlider.activeSlider").children(".onePazzle").last().after($(".firstSlider").last().children(".onePazzle").last());
                    } else if ($(".secondSlider.activeSlider").children(".onePazzle").length < 7 && $(".secondSlider").last().children(".onePazzle").length > 0) {
                        $(".secondSlider.activeSlider").children(".onePazzle").last().after($(".secondSlider").last().children(".onePazzle").last());
                    } else if ($(".firstSlider.activeSlider").children().length < 7 && $(".firstSlider").last().children().length == 0) {
                        $(".firstSlider.activeSlider").children(".onePazzle").last().after($(".secondSlider").last().children(".onePazzle").last());
                    } else if ($(".secondSlider.activeSlider").children(".onePazzle").length < 7 && $(".secondSlider").last().children(".onePazzle").length == 0) {
                        $(".secondSlider.activeSlider").children(".onePazzle").last().after($(".firstSlider").last().children(".onePazzle").last());
                    }
                }     //переносим пазлы с последних слайдеров в текущий
                if ($(".firstSlider").last().children(".onePazzle").length == 0 && $(".secondSlider").last().children(".onePazzle").length == 0) {
                    $(".firstSlider").last().remove();
                    $(".secondSlider").last().remove();
                    if($(".onePazzle").length == 0){
                        shadowBg.addClass("shadowBackgroundActive");
                        finish.addClass("finishActive");

                    } //проверка на выигрыш, действия при выигрыше
                } //удаляем пустые слайдеры

            } else {
                mainImage.toggleClass("unSuccessful"); //красная рамка для игрового поля
                setTimeout(function () {
                    mainImage.toggleClass("unSuccessful");
                }, 1000); //убираем красную рамку
                
            }
        }
    }); //добавляем кликнутость пазлам на рабочем поле


    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }; //функция для рандомного распределения элементов массива
    var arrPazzles = mainImage.children().sort(compareRandom); //создаём массив отсортированных в случайном порядке пазлов

    var j = 0; //для функции сортировки
    function chooseSliderChild() {
        if (i < 7) {
            return firstSlider.eq(sliderIndex).children().eq(j++);
        } else if (i >= 7 && i < 14) {
            return secondSlider.eq(sliderIndex).children().eq(j++);
        } else if (i >= 14 && i < 21) {
            return firstSlider.eq(sliderIndex + 1).children().eq(j++);
        } else if (i >= 21 && i < 28) {
            return secondSlider.eq(sliderIndex + 1).children().eq(j++);
        } else if (i >= 28 && i < 35) {
            return firstSlider.eq(sliderIndex + 2).children().eq(j++);
        } else if (i >= 35 && i < 42) {
            return secondSlider.eq(sliderIndex + 2).children().eq(j++);
        } else if (i >= 42 && i < 49) {
            return firstSlider.eq(sliderIndex + 3).children().eq(j++);
        } else if (i >= 49 && i < 56) {
            return secondSlider.eq(sliderIndex + 3).children().eq(j++);
        } else if (i >= 56 && i < 63) {
            return firstSlider.eq(sliderIndex + 4).children().eq(j++);
        } else {
            return secondSlider.eq(sliderIndex + 4).children().eq(j++);
        };
    }; //функция для сортировки пазлов на слайдеры

    for (var i = 0; i < 70; i++) {
        arrPazzles.eq(i).clone().css({
            position: "static",
            opacity: "1"
        }).appendTo(chooseSliderChild());
        if (j == 7) {
            j = 0;
        };
    }; //раскидываем копии пазлов в слайдеры

    onePazzle.children().click(function () {
        $(this).parent().toggleClass("activePazzle");
        $(this).parent().siblings(".activePazzle").removeClass("activePazzle");
        $(this).parent().parent().siblings(".activeSlider").children(".activePazzle").removeClass("activePazzle");
        console.log($(".activeSlider").children(".activePazzle").children().attr("src"));   //оставлю для простоты проверки
    }); //добавляем пазлам в слайдерах кликнутость

    rightArr.click(function () {
        $(".activeSlider").children(".activePazzle").removeClass("activePazzle");
        firstSlider.eq(sliderIndex).removeClass("activeSlider");
        secondSlider.eq(sliderIndex).removeClass("activeSlider");
        if (sliderIndex == $(".firstSlider").length - 1) {
            sliderIndex = 0;
        } else sliderIndex++;
        firstSlider.eq(sliderIndex).addClass("activeSlider");
        secondSlider.eq(sliderIndex).addClass("activeSlider");
    }); //добавляем кликнутость стрелкам

    leftArr.click(function () {
        $(".activeSlider").children(".activePazzle").removeClass("activePazzle");
        firstSlider.eq(sliderIndex).removeClass("activeSlider");
        secondSlider.eq(sliderIndex).removeClass("activeSlider");
        if (sliderIndex == 0) {
            sliderIndex = $(".firstSlider").length - 1;
        } else sliderIndex--;
        firstSlider.eq(sliderIndex).addClass("activeSlider");
        secondSlider.eq(sliderIndex).addClass("activeSlider");
    }); //добавляем кликнутость стрелкам
    
    btnReload.click(function(){window.location.reload();});  //финишная кнопка

    //адаптив сделать не смог, слишком мелкий дисплей на ноутбуке


});
