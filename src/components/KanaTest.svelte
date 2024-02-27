<script>
    import KanaSelection from './kana-test/KanaSelection.svelte'; 
    let inTest = false;
    function startTest(kana) {
        console.log(kana);
        inTest = true;
    }
</script>

<div class="m-6 max-w-4xl md:mx-auto">
    <h1 class="text-4xl font-bold mb-4">Kana Test</h1>
    <p class="mb-4">This is a test to see if you can recognize the different kana characters. Select which kana you want to be tested on below.</p>
    <p class="mb-4">This is only meant to help you remember the kana. If you don't know what they are at all, I'd recommend looking at <a class="link" href="https://www.tofugu.com/japanese/learn-hiragana/">Tofugu's guides</a>.</p>
    {#if inTest}
        <p>Test</p>
    {:else}
        <KanaSelection onSubmit={startTest} />
    {/if}
</div>