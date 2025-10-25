import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Calculator, TrendingDown, Home } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import happyCoupleImage from '../../attached_assets/stock_images/happy_couple_homeown_c72ff8ac.jpg';

export function HELOC() {
  const [homeValue, setHomeValue] = useState(250000);
  const [mortgageBalance, setMortgageBalance] = useState(100000);
  const [ltvRatio, setLtvRatio] = useState(80);
  
  const [debtBalance, setDebtBalance] = useState(25000);
  const [debtInterestRate, setDebtInterestRate] = useState(18);
  const [helocRate, setHelocRate] = useState(7.5);
  const [helocTerm, setHelocTerm] = useState(10);
  
  const [helocAmount, setHelocAmount] = useState(30000);
  const [helocInterest, setHelocInterest] = useState(7.5);
  const [drawPeriod, setDrawPeriod] = useState(10);
  const [repaymentPeriod, setRepaymentPeriod] = useState(20);

  const calculateMaxHELOC = () => {
    const maxLoan = (homeValue * (ltvRatio / 100)) - mortgageBalance;
    return Math.max(0, maxLoan);
  };

  const calculateDebtConsolidation = () => {
    const currentMonthlyRate = debtInterestRate / 100 / 12;
    const assumedCurrentTerm = 60;
    
    let currentMonthly = 0;
    if (debtInterestRate > 0) {
      currentMonthly = (debtBalance * currentMonthlyRate * Math.pow(1 + currentMonthlyRate, assumedCurrentTerm)) / 
                       (Math.pow(1 + currentMonthlyRate, assumedCurrentTerm) - 1);
    } else {
      currentMonthly = debtBalance / assumedCurrentTerm;
    }
    
    const helocMonthlyRate = helocRate / 100 / 12;
    const numPayments = helocTerm * 12;
    
    let newMonthly = 0;
    if (helocRate > 0) {
      newMonthly = (debtBalance * helocMonthlyRate * Math.pow(1 + helocMonthlyRate, numPayments)) / 
                   (Math.pow(1 + helocMonthlyRate, numPayments) - 1);
    } else {
      newMonthly = debtBalance / numPayments;
    }
    
    return {
      current: currentMonthly,
      new: newMonthly,
      savings: currentMonthly - newMonthly
    };
  };

  const calculateHELOCPayments = () => {
    const monthlyRate = helocInterest / 100 / 12;
    
    const interestOnlyPayment = helocAmount * monthlyRate;
    
    const repayMonths = repaymentPeriod * 12;
    let fullPayment = 0;
    if (helocInterest > 0) {
      fullPayment = (helocAmount * monthlyRate * Math.pow(1 + monthlyRate, repayMonths)) / 
                    (Math.pow(1 + monthlyRate, repayMonths) - 1);
    } else {
      fullPayment = helocAmount / repayMonths;
    }
    
    return {
      interestOnly: interestOnlyPayment,
      fullPayment: fullPayment,
      totalInterest: (fullPayment * repayMonths) - helocAmount
    };
  };

  const maxHELOC = calculateMaxHELOC();
  const debtSavings = calculateDebtConsolidation();
  const helocPayments = calculateHELOCPayments();

  const equityChartData = [
    { ltv: 70, amount: (homeValue * 0.7) - mortgageBalance },
    { ltv: 75, amount: (homeValue * 0.75) - mortgageBalance },
    { ltv: 80, amount: (homeValue * 0.8) - mortgageBalance },
    { ltv: 85, amount: (homeValue * 0.85) - mortgageBalance },
    { ltv: 90, amount: (homeValue * 0.9) - mortgageBalance },
  ];

  const debtComparisonData = [
    { name: 'Current Payment', amount: debtSavings.current },
    { name: 'New Payment', amount: debtSavings.new }
  ];

  const generateAmortization = () => {
    const data = [];
    const monthlyRate = helocInterest / 100 / 12;
    const repayMonths = repaymentPeriod * 12;
    const totalYears = drawPeriod + repaymentPeriod;
    let balance = helocAmount;
    
    for (let year = 0; year <= totalYears; year++) {
      data.push({ year, balance: Math.max(0, balance) });
      
      if (year < drawPeriod) {
        balance = helocAmount;
      } else {
        const yearsInRepayment = year - drawPeriod;
        const monthsInRepayment = yearsInRepayment * 12;
        const remainingMonths = repayMonths - monthsInRepayment;
        
        if (remainingMonths > 0 && balance > 0) {
          if (helocInterest > 0) {
            const monthlyPayment = (balance * monthlyRate * Math.pow(1 + monthlyRate, remainingMonths)) / 
                                   (Math.pow(1 + monthlyRate, remainingMonths) - 1);
            
            for (let month = 0; month < 12 && balance > 0; month++) {
              const interestPortion = balance * monthlyRate;
              const principalPortion = Math.min(monthlyPayment - interestPortion, balance);
              balance -= principalPortion;
            }
          } else {
            const monthlyPrincipal = helocAmount / repayMonths;
            balance -= monthlyPrincipal * 12;
          }
        } else {
          balance = 0;
        }
      }
    }
    return data;
  };

  const amortizationData = generateAmortization();

  return (
    <>
      <Helmet>
        <title>Home Equity Line of Credit (HELOC) | Mortgage Genius Has Low Rates</title>
        <meta 
          name="description" 
          content="Access your home's equity with a HELOC. Flexible credit line for home improvements, debt consolidation, or large expenses. Calculate your potential savings today." 
        />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#1e40af] to-[#6366f1]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 animate-grid-flow" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                  Home Equity Line of Credit
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                  For debt consolidation, home improvements or large expenses. Tap into your home's equity with a flexible line of credit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                  <a 
                    href="https://tinyurl.com/42xx3hzu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    Apply Now
                  </a>
                  <a 
                    href="tel:3215550199"
                    className="inline-block px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                  >
                    Call (321) 555-0199
                  </a>
                </div>
              </div>
              
              <div className="relative z-10 animate-fade-in-up animation-delay-600">
                <img 
                  src={happyCoupleImage} 
                  alt="Happy couple smiling together representing homeowners accessing home equity"
                  title="Happy Homeowners - Home Equity Line of Credit Benefits"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What is a HELOC */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                A <strong>home equity line of credit, or HELOC</strong>, works like a credit card. You are able to borrow up to 
                an approved amount over a certain period, commonly known as a draw period. During that time, you can withdraw 
                money as you need it. As you pay down the principal balance, your credit revolves, and you can use it again. 
                Payments are based on the amount advanced and not the full loan amount. HELOCs tend to be the most popular type 
                of home equity loan.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                HELOCs are generally best for people who need funds for ongoing home improvement projects or who need more time 
                to pay down existing debt. The rate is variable and adjusts based on market conditions, offering flexibility 
                that traditional loans cannot match.
              </p>
            </div>
          </div>
        </div>

        {/* HELOC FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-12 text-center">
              HELOC Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item value="q1" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        How much can I borrow with a HELOC?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      Most lenders allow you to borrow up to 80-85% of your home's appraised value, minus your existing mortgage 
                      balance. Some lenders may offer up to 90% loan-to-value ratio for well-qualified borrowers. Use our calculator 
                      below to see your potential HELOC amount.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="q2" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        What is the draw period and repayment period?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      The draw period (typically 10 years) allows you to borrow funds and make interest-only payments. After the 
                      draw period ends, the repayment period begins (usually 10-20 years), during which you pay back both principal 
                      and interest with no additional borrowing allowed.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="q3" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        Are there closing costs for a HELOC?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      Many lenders offer HELOCs with no closing costs for loans above certain amounts (often $10,000 or more). 
                      However, you may need to pay for an appraisal, title search, and other fees. We offer competitive programs 
                      with minimal fees to help you access your equity affordably.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="q4" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        Is a HELOC tax deductible?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      HELOC interest may be tax deductible if you use the funds to buy, build, or substantially improve your home. 
                      Interest on funds used for other purposes (debt consolidation, college tuition, etc.) is generally not deductible. 
                      Consult your tax advisor for specific guidance on your situation.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>

              <Accordion.Root type="single" collapsible className="space-y-4">
                <Accordion.Item value="q5" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        Can I pay off my HELOC early?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      Yes! Most HELOCs have no prepayment penalties, allowing you to pay down your balance anytime without fees. 
                      This flexibility makes HELOCs ideal for borrowers who expect increased income or want to aggressively pay 
                      down debt. Always verify prepayment terms with your specific lender.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="q6" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        How do HELOC interest rates work?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      HELOC rates are typically variable, meaning they adjust with the prime rate or another index. Your rate equals 
                      the index plus a margin (typically 0.5% to 3%). When market rates rise or fall, your HELOC rate adjusts 
                      accordingly, affecting your monthly payment.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="q7" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        What credit score do I need for a HELOC?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      Most lenders require a credit score of at least 620-680 for HELOC approval, though higher scores (720+) 
                      typically qualify for better rates. Lenders also consider your debt-to-income ratio, employment history, 
                      and home equity when evaluating your application.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="q8" className="bg-white rounded-xl shadow-md overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                      <h3 className="text-lg font-bold text-[#003366] pr-4">
                        Can I use a HELOC for anything?
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-2 animate-accordion-down">
                    <p className="text-gray-700 leading-relaxed">
                      Yes, you can use HELOC funds for virtually any purpose: home renovations, debt consolidation, education expenses, 
                      medical bills, business investments, or emergency funds. However, using funds for home improvements may provide 
                      tax benefits and increase your property value.
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
        </div>

        {/* Calculators Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-12 text-center">
              Home Equity Loan and Line of Credit Calculators
            </h2>

            {/* Home Equity Calculator */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Home Equity Calculator</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Figure out how much you can borrow with a home equity loan or line of credit.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Appraised value of your home
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="100000"
                      max="1000000"
                      step="10000"
                      value={homeValue}
                      onChange={(e) => setHomeValue(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">$100K</span>
                      <span className="text-xl font-bold text-[#003366]">${(homeValue / 1000).toFixed(0)}K</span>
                      <span className="text-sm text-gray-500">$1M</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Outstanding home loans
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="0"
                      max={homeValue}
                      step="5000"
                      value={mortgageBalance}
                      onChange={(e) => setMortgageBalance(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">$0</span>
                      <span className="text-xl font-bold text-[#003366]">${(mortgageBalance / 1000).toFixed(0)}K</span>
                      <span className="text-sm text-gray-500">${(homeValue / 1000).toFixed(0)}K</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Loan to value ratio (LTV)
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="70"
                      max="90"
                      step="5"
                      value={ltvRatio}
                      onChange={(e) => setLtvRatio(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">70%</span>
                      <span className="text-xl font-bold text-[#003366]">{ltvRatio}%</span>
                      <span className="text-sm text-gray-500">90%</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-[#10b981]">
                    <p className="text-gray-600 mb-3">You may qualify for a</p>
                    <p className="text-5xl font-bold text-[#10b981] mb-3">
                      ${Math.max(0, maxHELOC).toLocaleString()}
                    </p>
                    <p className="text-gray-600 mb-6">home equity line of credit.</p>
                    <a 
                      href="https://tinyurl.com/42xx3hzu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-all duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">HELOC Amount by Loan-to-Value Ratio</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={equityChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ltv" label={{ value: 'LTV %', position: 'insideBottom', offset: -5 }} />
                    <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                    <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                    <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} name="HELOC Amount" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Debt Consolidation Calculator */}
            <div className="mb-16 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">Debt Consolidation Calculator</h3>
              </div>
              <p className="text-gray-600 mb-8">
                See how much you could save by consolidating your high-interest debt into a lower-rate HELOC.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Credit card/debt balance
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="1000"
                      value={debtBalance}
                      onChange={(e) => setDebtBalance(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">$5K</span>
                      <span className="text-xl font-bold text-[#003366]">${(debtBalance / 1000).toFixed(0)}K</span>
                      <span className="text-sm text-gray-500">$100K</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Current interest rate
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="0.5"
                      value={debtInterestRate}
                      onChange={(e) => setDebtInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">5%</span>
                      <span className="text-xl font-bold text-[#003366]">{debtInterestRate}%</span>
                      <span className="text-sm text-gray-500">30%</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    HELOC interest rate
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="4"
                      max="12"
                      step="0.25"
                      value={helocRate}
                      onChange={(e) => setHelocRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">4%</span>
                      <span className="text-xl font-bold text-[#003366]">{helocRate}%</span>
                      <span className="text-sm text-gray-500">12%</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Repayment term (years)
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="5"
                      value={helocTerm}
                      onChange={(e) => setHelocTerm(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#003366]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">5</span>
                      <span className="text-xl font-bold text-[#003366]">{helocTerm} years</span>
                      <span className="text-sm text-gray-500">20</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className={`bg-white rounded-xl shadow-lg p-8 text-center border-2 ${debtSavings.savings >= 0 ? 'border-[#10b981]' : 'border-orange-500'}`}>
                    <p className="text-gray-600 mb-3">
                      {debtSavings.savings >= 0 ? 'Your new monthly payment could be' : 'Note: Your new monthly payment would be'}
                    </p>
                    <p className={`text-5xl font-bold mb-3 ${debtSavings.savings >= 0 ? 'text-[#10b981]' : 'text-orange-600'}`}>
                      ${Math.abs(debtSavings.savings).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-gray-600 mb-6">
                      {debtSavings.savings >= 0 ? 'lower by consolidating your debt.' : 'higher with this HELOC term. Consider a longer term or wait for better rates.'}
                    </p>
                    <div className="space-y-2 text-left mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Current monthly payment:</span>
                        <span className="font-semibold">${debtSavings.current.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">New monthly payment:</span>
                        <span className={`font-semibold ${debtSavings.savings >= 0 ? 'text-[#10b981]' : 'text-orange-600'}`}>
                          ${debtSavings.new.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                    <a 
                      href="https://tinyurl.com/42xx3hzu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-all duration-300"
                    >
                      Apply to Consolidate Debt
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Monthly Payment Comparison</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={debtComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `$${value.toFixed(0)}`} />
                    <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                    <Bar dataKey="amount" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* HELOC Payment Calculator */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#6366f1] rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#003366]">HELOC Payment Calculator</h3>
              </div>
              <p className="text-gray-600 mb-8">
                Calculate your estimated monthly payments during the draw and repayment periods.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    HELOC amount
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="10000"
                      max="250000"
                      step="5000"
                      value={helocAmount}
                      onChange={(e) => setHelocAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6366f1]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">$10K</span>
                      <span className="text-xl font-bold text-[#003366]">${(helocAmount / 1000).toFixed(0)}K</span>
                      <span className="text-sm text-gray-500">$250K</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Interest rate
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="4"
                      max="12"
                      step="0.25"
                      value={helocInterest}
                      onChange={(e) => setHelocInterest(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6366f1]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">4%</span>
                      <span className="text-xl font-bold text-[#003366]">{helocInterest}%</span>
                      <span className="text-sm text-gray-500">12%</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Draw period (years)
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="5"
                      max="15"
                      step="5"
                      value={drawPeriod}
                      onChange={(e) => setDrawPeriod(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6366f1]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">5</span>
                      <span className="text-xl font-bold text-[#003366]">{drawPeriod} years</span>
                      <span className="text-sm text-gray-500">15</span>
                    </div>
                  </div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2 mt-6">
                    Repayment period (years)
                  </label>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="10"
                      max="20"
                      step="5"
                      value={repaymentPeriod}
                      onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6366f1]"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">10</span>
                      <span className="text-xl font-bold text-[#003366]">{repaymentPeriod} years</span>
                      <span className="text-sm text-gray-500">20</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#6366f1]">
                    <p className="text-sm text-gray-600 mb-2">During Draw Period (Interest-Only)</p>
                    <p className="text-3xl font-bold text-[#6366f1]">
                      ${helocPayments.interestOnly.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                    </p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-[#003366]">
                    <p className="text-sm text-gray-600 mb-2">During Repayment Period (Principal + Interest)</p>
                    <p className="text-3xl font-bold text-[#003366]">
                      ${helocPayments.fullPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6">
                    <p className="text-sm text-gray-600 mb-2">Total Interest Over Life of Loan</p>
                    <p className="text-2xl font-bold text-gray-700">
                      ${helocPayments.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Balance Over Time</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={amortizationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                    <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
                    <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                    <Line type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={3} name="Outstanding Balance" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#003366] to-[#1e40af] rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
              
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Access Your Home Equity?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Get started today with a flexible HELOC that works for your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://tinyurl.com/42xx3hzu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#10b981] text-white font-semibold rounded-lg hover:bg-[#059669] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Apply Online Now
                  </a>
                  <a 
                    href="tel:3215550199"
                    className="inline-block px-8 py-4 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Call (321) 555-0199
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
