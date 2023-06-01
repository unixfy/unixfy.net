<script>
    import PageHeader from "$lib/PageHeader.svelte";

    // hide from archive/google
    // metatags.robots = "noindex"
</script>

<div class="page-wrapper">
    <div class="ct">
        <PageHeader title="Donate 🎉"
                    content="If you appreciate the stuff I do."/>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fab fa-paypal"></i> PayPal</h2>
            <div class="p-4 border border-blue-500 rounded mb-4">
                <span class="font-bold">Payment methods:</span> Visa, Discover, American Express, Mastercard, PayPal
                Cash
            </div>
            <!--            PayPal donation button -->
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
                <input type="hidden" name="hosted_button_id" value="5D7DTP89LVQSN"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0"
                       name="submit" title="PayPal - The safer, easier way to pay online!"
                       alt="Donate with PayPal button"/>
                <img alt="" border="0" src="https://www.paypal.com/en_NL/i/scr/pixel.gif" width="1" height="1"/>
            </form>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fab fa-bitcoin"></i> Coinbase
                Commerce</h2>
            <div class="p-4 border border-blue-500 rounded mb-4">
                <p class="mb-2"><span class="font-bold">Accepted currencies:</span> Bitcoin (BTC), Bitcoin Cash (BCH),
                    Dai (DAI),
                    Dogecoin (DOGE), Ethereum (ETH), Litecoin (LTC), USD Coin (USDC)</p>
                <p>USDC/ETH/DAI on Ethereum mainnet only.</p>
            </div>
            <!--            CB Commerce donation button -->
            <a href="https://commerce.coinbase.com/checkout/73fa228a-30c6-439b-bdde-aa2da9150492" rel="noreferrer" target="_blank">
                <div class="button">Donate with Coinbase Commerce</div>
            </a>

        </div>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fas fa-money-bill"></i> Venmo</h2>
            <div class="p-4 border border-blue-500 rounded mb-4">
                <p class="mb-2"><span class="font-bold">Payment methods:</span> Bank account, Visa, Discover, American Express, MasterCard, Venmo balance</p>
                <p>Please reach out if verification is required.</p>
            </div>
            <a href="https://venmo.com/code?user_id=2816232529068032206" rel="noreferrer" target="_blank">
                <div class="button">Donate with Venmo</div>
            </a>

        </div>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fas fa-dollar-sign"></i> CashApp</h2>
            <div class="p-4 border border-blue-500 rounded mb-4">
                <p><span class="font-bold">Payment methods:</span> Bank account, Visa, Discover, American Express, MasterCard, CashApp balance, Stock, Bitcoin</p>
            </div>
            <a href="https://cash.app/$axwang64" rel="noreferrer" target="_blank">
                <div class="button">Donate with CashApp</div>
            </a>

        </div>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fas fa-question-circle"></i> Other
            </h2>

            <p class="mb-2">Please reach out to me (e.g., on <a class="link" href="/discord">Discord</a>) if you're interested in another payment method.</p>
        </div>
    </div>
</div>