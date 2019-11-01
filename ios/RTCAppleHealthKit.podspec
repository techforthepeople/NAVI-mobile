# https://github.com/terrillo/rn-apple-healthkit/pull/96

Pod::Spec.new do |s|
    s.name         = "RCTAppleHealthKit"
    s.version      = "0.6.5"
    s.summary      = "A React Native package for interacting with Apple HealthKit"
    s.license      = "MIT"
    s.homepage     = "https://github.com/terrillo/rn-apple-healthkit"
    s.authors      = "Terrillo Walls"
    s.platform     = :ios, "9.0"
    s.source       = { :git => "https://github.com/terrillo/rn-apple-healthkit.git", :tag => "0.6.5v" }
    s.source_files = "RCTAppleHealthKit/**/*.{h,m}"
  
    s.dependency "React"
  end