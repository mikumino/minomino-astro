<script>
    import KanaSelection from './kana-test/KanaSelection.svelte'; 
    import Quiz from './kana-test/Quiz.svelte';
    let inTest = false;
    let selectedKana = [];
    function startTest(kana) {
        selectedKana = kana;
        inTest = true;
    }
    function stopTest() {
        inTest = false;
    }
</script>

<div class="m-6 max-w-4xl md:mx-auto">
    <h1 class="text-4xl font-bold mb-4">Kana Test</h1>
    <p class="mb-4">This is a test to see if you can recognize the different kana characters. Select which kana you want to be tested on below.</p>
    <p class="mb-4">This is only meant to help you remember the kana. If you don't know what they are at all, I'd recommend looking at <a class="link" href="https://www.tofugu.com/japanese/learn-hiragana/">Tofugu's guides</a>.</p>
    {#if inTest}
        <Quiz selectedKana={selectedKana} stopTest={stopTest} />
    {:else}
        <KanaSelection onSubmit={startTest} />
    {/if}
</div>