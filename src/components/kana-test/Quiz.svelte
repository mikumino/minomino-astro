<script>
    export let selectedKana;
    let currentKana = '';
    function nextKana() {
        currentKana = selectedKana[Math.floor(Math.random() * selectedKana.length)];
    }
    nextKana();

    
    
</script>

<div class="flex flex-col w-full">
    
</div>
