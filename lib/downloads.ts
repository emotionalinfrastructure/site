export type TierADownload = {
  ledgerId: string;
  title: string;
  section: string;
  file: string;
  sizeBytes: number;
  sha256: string;
};

// Tier A public-safe review library from Master Release Package 8.6.
// SHA-256 values are copied from release/EI_MRP_8_6_hash_ledger.csv and were
// re-verified against the files in public/downloads/ before publication.
export const tierADownloads: TierADownload[] = [
  {
    ledgerId: "EI-HASH-0007",
    title: "EIT Research Portfolio Database",
    section: "Figures, appendices, and database",
    file: "EI-HASH-0007_EIT_Research_Portfolio_Database.xlsx",
    sizeBytes: 16926,
    sha256: "75c9825bc4e26749362efda5007eb038184b6f500c31149f95ec932a128f0668"
  },
  {
    ledgerId: "EI-HASH-0011",
    title: "EIT Paper 1 Journal Strategy",
    section: "Research",
    file: "EI-HASH-0011_EIT_Paper1_Journal_Strategy.pdf",
    sizeBytes: 4648,
    sha256: "6dcad61f2881e63e5af0ecf2980e3086af9da48eb8d4d5482ce56878a48b0b1f"
  },
  {
    ledgerId: "EI-HASH-0012",
    title: "EIT Paper 2 Updated Submission Package",
    section: "Research",
    file: "EI-HASH-0012_EIT_Paper2_Updated_Submission_Package.zip",
    sizeBytes: 489494,
    sha256: "8c06dc560d217765e6b250a9bb01c917ef88bf3b8234536a065eef38e3b29e27"
  },
  {
    ledgerId: "EI-HASH-0013",
    title: "EIT Paper 2 Cover Letter",
    section: "Research",
    file: "EI-HASH-0013_EIT_Paper2_Cover_Letter.pdf",
    sizeBytes: 23417,
    sha256: "28e758f03eaa049f0ee74634f2b227a28afcc8a5f00fd3ec81c498a6db890a1b"
  },
  {
    ledgerId: "EI-HASH-0014",
    title: "EIT Paper 2 Revision Memo",
    section: "Research",
    file: "EI-HASH-0014_EIT_Paper2_Revision_Memo.pdf",
    sizeBytes: 33080,
    sha256: "6828216646b0e6daa828aeb31fd1e6e663c3acb9de4572267295bb4de2d9042b"
  },
  {
    ledgerId: "EI-HASH-0015",
    title: "EIT Paper 2 Updated APA7 Manuscript (DOCX)",
    section: "Research",
    file: "EI-HASH-0015_EIT_Paper2_Updated_APA7_Manuscript.docx",
    sizeBytes: 126773,
    sha256: "cd7fd6883059c15f9f948774215e4eca477ce975bb162c0d3d09866177bb7db9"
  },
  {
    ledgerId: "EI-HASH-0016",
    title: "EIT Paper 2 Updated APA7 Manuscript (PDF)",
    section: "Research",
    file: "EI-HASH-0016_EIT_Paper2_Updated_APA7_Manuscript.pdf",
    sizeBytes: 335079,
    sha256: "2996c6a626068e232bc1de5c29bf5d619a0851c5ecc5da82d95973037a2bc990"
  },
  {
    ledgerId: "EI-HASH-0017",
    title: "EIT Portfolio Release Manifest v0.1",
    section: "Portfolio and public status",
    file: "EI-HASH-0017_EIT_Portfolio_Release_Manifest_v0_1.json",
    sizeBytes: 15173,
    sha256: "0ae5af19ace67b4ea938bb7cce284a257bfe09c6ebeffce244d382b30b6c915a"
  },
  {
    ledgerId: "EI-HASH-0018",
    title: "EIT Public Artifact Index v0.1",
    section: "Portfolio and public status",
    file: "EI-HASH-0018_EIT_Public_Artifact_Index_v0_1.md",
    sizeBytes: 9154,
    sha256: "25fcf80aee689175c9a3a11dd11f65e2fe53d62a8b001dbc837270ff375fb77d"
  },
  {
    ledgerId: "EI-HASH-0019",
    title: "EIT Public Deployment 1.2 Portfolio Site (tar.gz)",
    section: "Portfolio and public status",
    file: "EI-HASH-0019_EIT_Public_Deployment_1_2_Portfolio_Site.tar.gz",
    sizeBytes: 17434,
    sha256: "c94da825c288e7d3cf4008cf2ef985151d4829aed60501977716826e1ac521d0"
  },
  {
    ledgerId: "EI-HASH-0020",
    title: "EIT Public Deployment 1.2 Portfolio Site (zip)",
    section: "Portfolio and public status",
    file: "EI-HASH-0020_EIT_Public_Deployment_1_2_Portfolio_Site.zip",
    sizeBytes: 37457,
    sha256: "3ada3afca7fc637d60f21a094f90afcca6b9871d54e57494591a7c38d29fd262"
  },
  {
    ledgerId: "EI-HASH-0021",
    title: "Download Library Ledger (CSV)",
    section: "Portfolio and public status",
    file: "EI-HASH-0021_download_library.csv",
    sizeBytes: 2508,
    sha256: "1bef83d83c017626567bbe8df16901b22bd1839cfa0062a558dde785dd1ef78e"
  },
  {
    ledgerId: "EI-HASH-0022",
    title: "Launch Checklist",
    section: "Portfolio and public status",
    file: "EI-HASH-0022_launch-checklist.md",
    sizeBytes: 1736,
    sha256: "ca32a6956bab18814c6da4007711f654d7b539ae333dde1ce5d91d982996bb4f"
  },
  {
    ledgerId: "EI-HASH-0023",
    title: "Portfolio Index Source",
    section: "Portfolio and public status",
    file: "EI-HASH-0023_index.md",
    sizeBytes: 3329,
    sha256: "40fb687d6d1d3778e28ffeef16d82fed2ed59bc31b9b10634e9d8f347f1cf0a6"
  },
  {
    ledgerId: "EI-HASH-0024",
    title: "Public Status Statement Source",
    section: "Portfolio and public status",
    file: "EI-HASH-0024_status.md",
    sizeBytes: 1268,
    sha256: "ebaa78cb1a691947df3de929cd915aab4c7397a6f9669d6a8b877f5d45e7c0bb"
  }
];
