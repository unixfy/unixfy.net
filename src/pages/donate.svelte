<script>
    import PageHeader from "../components/PageHeader.svelte";
    import {url} from "@roxi/routify";
</script>

<div class="page-wrapper">
    <div class="ct">
        <PageHeader title="Donate 🎉"
                    content="Do you appreciate my work? I would appreciate your donation! Even a dollar or two helps."/>

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
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fas fa-coins"></i> CoinPayments.net
            </h2>
            <div class="p-4 border border-blue-500 rounded mb-4">
                <p class="mb-2"><span class="font-bold">Accepted currencies:</span> 50+ cryptocurrencies accepted,
                    including various ERC20 tokens.</p>
                <p><span class="font-bold italic">Use only if your preferred payment method isn't available through PayPal or Coinbase Commerce.</span>
                </p>
            </div>
            <!--            Coinpayments donation button -->
            <form action="https://www.coinpayments.net/index.php" method="post" target="_blank">
                <input type="hidden" name="cmd" value="_donate">
                <input type="hidden" name="reset" value="1">
                <input type="hidden" name="merchant" value="7f855825350c1a5e2799a75b15315b42">
                <input type="hidden" name="item_name" value="Unixfy.net Donation - THANK YOU!">
                <input type="hidden" name="allow_currency" value="1">
                <input type="hidden" name="currency" value="USD">
                <input type="hidden" name="amountf" value="1.00000000">
                <input type="hidden" name="quantity" value="1">
                <input type="hidden" name="want_shipping" value="0">
                <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue.png"
                       alt="Donate Now with CoinPayments.net">
            </form>
        </div>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fas fa-question-circle"></i> Other
            </h2>

            <p class="mb-2">Please reach out to me (e.g., on <a class="link" href="{$url('/discord')}">Discord</a>) if you're interested in another payment method.</p>
        </div>
    </div>
</div>