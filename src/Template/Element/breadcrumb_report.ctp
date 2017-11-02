<div class="row m-t-md">
    <?php
    foreach ($breadcumbReportData as $breadcumbReportData) {
        $iconStatus = (isset($breadcumbReportData['iconStatus']) && !empty($breadcumbReportData['iconStatus'])) ? $breadcumbReportData['iconStatus'] : '';
        $iconBgColor = (isset($breadcumbReportData['iconBgColor']) && !empty($breadcumbReportData['iconBgColor'])) ? $breadcumbReportData['iconBgColor'] : '';
        $imageName = (isset($breadcumbReportData['imageName']) && !empty($breadcumbReportData['imageName'])) ? $breadcumbReportData['imageName'] : NULL;
        $reportText = (isset($breadcumbReportData['reportText']) && !empty($breadcumbReportData['reportText'])) ? $breadcumbReportData['reportText'] : '';
        $reportUrl = (isset($breadcumbReportData['reportUrl'])&& !empty($breadcumbReportData['reportUrl'])) ? $breadcumbReportData['reportUrl'] : 'javascript:void(0)';
        ?>
        <div class="col-sm-2">
            <div class="panel report-height <?= $iconStatus ?>">
                <?=
                $this->Html->link('<span class="report-icon '.$iconBgColor.'">' . $this->Html->image($imageName, ['alt' => 'Report Icon']) . '</span>' .
                        '<span class="report-text"><span class="report h4 font-bold ">' . $reportText . '</span>', 
                        $reportUrl, 
                        ['escape' => false]
                );
                ?>    
            </div>
        </div>
    <?php
}
?>
</div>