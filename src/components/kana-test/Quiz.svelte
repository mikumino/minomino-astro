<script>
    import * as wanakana from 'wanakana';
    export let stopTest;
    export let selectedKana;
    let currentKana = '';
    let textboxValue = 'lol';

    function nextKana() {
        currentKana = selectedKana[Math.floor(Math.random() * selectedKana.length)];
    }
    
    function checkAnswer() {
        if (wanakana.toHiragana(textboxValue) === wanakana.toHiragana(currentKana)) {
            selectedKana = selectedKana.filter(kana => kana !== currentKana);
            if (selectedKana.length === 0) {
                console.log('done');
                stopTest();
            }
            nextKana();
        } else {
            handleIncorrect();
        }
    }

    function handleIncorrect() {
        console.log('incorrect');
    }

    nextKana(); // runs on load
    
</script>

<div class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center">
        <h2 class="text-2xl font-bold mb-4">{currentKana}</h2>
        <form on:submit|preventDefault={checkAnswer} >
            <input type="text" bind:value={textboxValue} class="input input-bordered" />
        </form>
    </div>
</div>
