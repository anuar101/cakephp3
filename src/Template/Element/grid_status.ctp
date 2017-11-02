<div id="tableAction" style="display: none">
    <?=
    $this->Form->select('', $ActionStatus, [
        'id' => 'status_actions',
        'class' => 'input-sm form-control input-s-sm inline v-middle custom-listbox-dt-footer',
        'label' => false]
    )
    ?> 
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="apply">Apply</button>
</div>