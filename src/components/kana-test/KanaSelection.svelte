<script>
    export let onSubmit;
    let mainKanaRow = [
        { id: 1, name: 'あいうえお', value: ['あ', 'い', 'う', 'え', 'お'], selected: false },
        { id: 2, name: 'かきくけこ', value: ['か', 'き', 'く', 'け', 'こ'], selected: false },
        { id: 3, name: 'さしすせそ', value: ['さ', 'し', 'す', 'せ', 'そ'], selected: false },
        { id: 4, name: 'たちつてと', value: ['た', 'ち', 'つ', 'て', 'と'], selected: false },
        { id: 5, name: 'なにぬねの', value: ['な', 'に', 'ぬ', 'ね', 'の'], selected: false },
        { id: 6, name: 'はひふへほ', value: ['は', 'ひ', 'ふ', 'へ', 'ほ'], selected: false },
        { id: 7, name: 'まみむめも', value: ['ま', 'み', 'む', 'め', 'も'], selected: false },
        { id: 8, name: 'やゆよ', value: ['や', 'ゆ', 'よ'], selected: false },
        { id: 9, name: 'らりるれろ', value: ['ら', 'り', 'る', 'れ', 'ろ'], selected: false },
        { id: 10, name: 'わをん', value: ['わ', 'を', 'ん'], selected: false }
    ]

    let dakutenRow = [
        { id: 11, name: 'がぎぐげご', value: ['が', 'ぎ', 'ぐ', 'げ', 'ご'], selected: false },
        { id: 12, name: 'ざじずぜぞ', value: ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'], selected: false },
        { id: 13, name: 'だぢづでど', value: ['だ', 'ぢ', 'づ', 'で', 'ど'], selected: false },
        { id: 14, name: 'ばびぶべぼ', value: ['ば', 'び', 'ぶ', 'べ', 'ぼ'], selected: false },
        { id: 15, name: 'ぱぴぷぺぽ', value: ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'], selected: false }
    ]

    let combinationRow = [
        { id: 16, name: 'きゃきゅきょ', value: ['きゃ', 'きゅ', 'きょ'], selected: false },
        { id: 17, name: 'しゃしゅしょ', value: ['しゃ', 'しゅ', 'しょ'], selected: false },
        { id: 18, name: 'ちゃちゅちょ', value: ['ちゃ', 'ちゅ', 'ちょ'], selected: false },
        { id: 19, name: 'にゃにゅにょ', value: ['にゃ', 'にゅ', 'にょ'], selected: false },
        { id: 20, name: 'ひゃひゅひょ', value: ['ひゃ', 'ひゅ', 'ひょ'], selected: false },
        { id: 21, name: 'みゃみゅみょ', value: ['みゃ', 'みゅ', 'みょ'], selected: false },
        { id: 22, name: 'りゃりゅりょ', value: ['りゃ', 'りゅ', 'りょ'], selected: false }
    ]

    function getSelectedKana() {
        let selectedKana = [];

        mainKanaRow.forEach(row => {
            if (row.selected) {
                selectedKana = selectedKana.concat(row.value);
            }
        });

        dakutenRow.forEach(row => {
            if (row.selected) {
                selectedKana = selectedKana.concat(row.value);
            }
        });

        combinationRow.forEach(row => {
            if (row.selected) {
                selectedKana = selectedKana.concat(row.value);
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
            <h2 class="text-2xl font-bold mb-2">Main Kana</h2>
            <div class="flex flex-row w-full items-center justify-center mb-2">
                <button class="text-primary mb-2 mr-4" on:click={() => {
                    mainKanaRow.forEach(row => row.selected = true);
                    mainKanaRow = [...mainKanaRow];
                }}>Select All</button>
                <button class="text-primary mb-2" on:click={() => {
                    mainKanaRow.forEach(row => row.selected = false);
                    mainKanaRow = [...mainKanaRow];
                }}>Deselect All</button>
            </div>
            {#each mainKanaRow as row}
                <label for={row.id} class={`text-xl btn btn-primary ${row.selected ? '' : 'btn-outline'} mb-2 w-full`}>
                    <input type="checkbox" id={row.id} bind:checked={row.selected} class="hidden" />
                    {row.name}
                </label>
            {/each}
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold mb-2">Dakuten</h2>
            <div class="flex flex-row w-full items-center justify-center mb-2">
                <button class="text-primary mb-2 mr-4" on:click={() => {
                    dakutenRow.forEach(row => row.selected = true);
                    dakutenRow = [...dakutenRow];
                }}>Select All</button>
                <button class="text-primary mb-2" on:click={() => {
                    dakutenRow.forEach(row => row.selected = false);
                    dakutenRow = [...dakutenRow];
                }}>Deselect All</button>
            </div>
            {#each dakutenRow as row}
                <label for={row.id} class={`text-xl btn btn-primary ${row.selected ? '' : 'btn-outline'} mb-2 w-full`}>
                    <input type="checkbox" id={row.id} bind:checked={row.selected} class="hidden" />
                    {row.name}
                </label>
            {/each}
        </div>
        <div class="flex flex-col items-center">
            <h2 class="text-2xl font-bold mb-2">Combination</h2>
            <div class="flex flex-row w-full items-center justify-center mb-2">
                <button class="text-primary mb-2 mr-4" on:click={() => {
                    combinationRow.forEach(row => row.selected = true);
                    combinationRow = [...combinationRow];
                }}>Select All</button>
                <button class="text-primary mb-2" on:click={() => {
                    combinationRow.forEach(row => row.selected = false);
                    combinationRow = [...combinationRow];
                }}>Deselect All</button>
            </div>
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