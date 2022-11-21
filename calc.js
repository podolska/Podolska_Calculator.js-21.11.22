function a(){

    const calc = prompt('What you want to do?' + ' ' + 'add, sub, mult, div');
    let status = false;

    switch (true) {
        case (calc === null):
            alert('Click cancel');
            status = true;
            break;
        case calc.trim() === '':
            alert('Empty String');
            status = true;
            break;
        case calc !== 'add' && calc !=='sub' && calc !== 'mult' && calc !=='div' :
            alert('Введите правильное значение');
            status = true;
            break;
    }
    if (status){
        return;
    }

    function b(str){
        const num = prompt('Ввести ' + str + ' число:');
        let statusForNum = false;

        switch (true) {
            case (num === ''):
                alert('You are not typed num');
                statusForNum = true;
                break;
            case (num === null):
                alert('Click cancel');
                statusForNum = true;
                break;
            case (isNaN( +num )):
                alert('number is Ba_NaN');
                statusForNum = true;
                break;
        }
        if (statusForNum){
            return 'bad';
        }
        return num;
    }

    let one = b('первое');
    if(one === 'bad') return;
    let second = b('второе');
    if(second === 'bad') return;


    let result = '';
    let oper = '';

    switch (calc){
        case 'add':
            result = (+one + +second);
            oper = '+';
            break;
        case 'sub':
            result = (+one - +second);
            oper = '-';
            break;
        case 'mult':
            result = (+one * +second);
            oper = '*';
            break;
        case 'div':
            result = (+one / +second);
            oper = '/';
            break;
        default:
            break;

    }

    alert( one + '' + oper + '' + '' + second  + '' + '=' + '' +  +result);


}

a()