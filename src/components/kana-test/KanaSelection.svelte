<script>
    export let onSubmit;
    let mainKanaRow = [
        { id: 1, name: 'あいうえお', selected: false },
        { id: 2, name: 'かきくけこ', selected: false },
        { id: 3, name: 'さしすせそ', selected: false },
        { id: 4, name: 'たちつてと', selected: false },
        { id: 5, name: 'なにぬねの', selected: false },
        { id: 6, name: 'はひふへほ', selected: false },
        { id: 7, name: 'まみむめも', selected: false },
        { id: 8, name: 'やゆよ', selected: false },
        { id: 9, name: 'らりるれろ', selected: false },
        { id: 10, name: 'わをん', selected: false }
    ]

    let dakutenRow = [
        { id: 11, name: 'がぎぐげご', selected: false },
        { id: 12, name: 'ざじずぜぞ', selected: false },
        { id: 13, name: 'だぢづでど', selected: false },
        { id: 14, name: 'ばびぶべぼ', selected: false },
        { id: 15, name: 'ぱぴぷぺぽ', selected: false }
    ]

    let combinationRow = [
        { id: 16, name: 'きゃきゅきょ', selected: false },
        { id: 17, name: 'しゃしゅしょ', selected: false },
        { id: 18, name: 'ちゃちゅちょ', selected: false },
        { id: 19, name: 'にゃにゅにょ', selected: false },
        { id: 20, name: 'ひゃひゅひょ', selected: false },
        { id: 21, name: 'みゃみゅみょ', selected: false },
        { id: 22, name: 'りゃりゅりょ', selected: false }
    ]

    function getSelectedKana() {
        let selectedKana = [];
        mainKanaRow.forEach(row => {
            if (row.selected) {
                selectedKana.push(row.name);
            }
        });
        dakutenRow.forEach(row => {
            if (row.selected) {
                selectedKana.push(row.name);
            }
        });
        combinationRow.forEach(row => {
            if (row.selected) {
                selectedKana.push(row.name);
            }
        });
        return selectedKana;
    }

    function startTest() {
        onSubmit(getSelectedKana());
    }
</script>

<div class="flex flex-col w-full">
    <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold mb-4">Main Kana</h2>
            {#each mainKanaRow as row}
                <label for={row.id} class={`text-xl btn btn-primary ${row.selected ? '' : 'btn-outline'} mb-2 w-full`}>
                    <input type="checkbox" id={row.id} bind:checked={row.selected} class="hidden" />
                    {row.name}
                </label>
            {/each}
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold mb-4">Dakuten</h2>
            {#each dakutenRow as row}
                <label for={row.id} class={`text-xl btn btn-primary ${row.selected ? '' : 'btn-outline'} mb-2 w-full`}>
                    <input type="checkbox" id={row.id} bind:checked={row.selected} class="hidden" />
                    {row.name}
                </label>
            {/each}
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold mb-4">Combination</h2>
            {#each combinationRow as row}
                <label for={row.id} class={`text-xl btn btn-primary ${row.selected ? '' : 'btn-outline'} mb-2 w-full`}>
                    <input type="checkbox" id={row.id} bind:checked={row.selected} class="hidden" />
                    {row.name}
                </label>
            {/each}
        </div>
    </div>
    <button on:click={startTest} class="btn btn-primary mt-4">Start Test</button>
</div>